"use client";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { Palette } from "@mui/material/styles/createPalette";
import useThemeMode from "@/hooks/useThemeMode";
import { useServerInsertedHTML } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { darkTheme, lightTheme } from "./themes";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const options = { key: "mui" };
  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  const isSystemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const themeMode = useThemeMode();

  const isDark =
    (themeMode === "media" && isSystemDark) || themeMode === "dark";

  const theme = isDark ? darkTheme : lightTheme;

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement
        .getElementsByTagName("body")[0]
        .classList.add("dark");
    } else {
      document.documentElement
        .getElementsByTagName("body")[0]
        .classList.remove("dark");
    }

    const paletteKeys: (keyof Palette)[] = [
      "primary",
      "secondary",
      "success",
      "info",
      "warning",
      "error",
      "common",
      "text",
      "background",
      "action",
      "appGray",
    ];

    paletteKeys.forEach((palettekey) => {
      if (theme.palette[palettekey]) {
        Object.keys(theme.palette[palettekey]).forEach((palettekeyColor) => {
          document.documentElement.style.setProperty(
            `--color-${palettekey}-${palettekeyColor}`,
            theme.palette[palettekey][palettekeyColor]
          );
        });
      }
    });
  }, [isDark, theme.palette]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
