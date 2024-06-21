import {
  ThemeOptions,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Work_Sans } from "next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });

export const defaultTheme = customizeTheme();
const { palette: pal } = createTheme();

export const lightTheme = responsiveFontSizes(
  customizeTheme({
    palette: {
      primary: {
        lighter: "#F9FBFF",
        light: "#EBF8FF",
        main: "#0356B2",
        dark: "#001C50",
        contrastText: "#FFFFFF",
      },
      secondary: {
        lighter: "#E4E7F1",
        light: "#B3C1DB",
        main: "#002F86",
        dark: "#00215E",
        contrastText: "#FFFFFF",
      },
      success: {
        ...defaultTheme.palette.success,
        lighter: "#F3FEF7",
        light: "#DFFFE9",
        main: "#039855",
        dark: "#024518",
      },
      appGray: {
        lighter: "#FCFCFD",
        light: "#F2F4F7",
        main: "#98A2B3",
        dark: "#101828",
        contrastText: "#0000",
      },
      warning: {
        ...defaultTheme.palette.warning,
      },
    },
    shadows: [
      "none",
      "0px 2px 3px 0px  rgba(139, 152, 165, 0.075),0px 4px 5px 0px  rgba(139, 152, 165, 0.075),0px 2px 1px -1px  rgba(139, 152, 165, 0.075)",
      "0px 2px 5px 0px rgba(145, 158, 171, 0.12),0px 2px 2px 0px rgba(145, 158, 171, 0.12),0px 3px 1px -2px rgba(145, 158, 171, 0.12)",
      "0px 2px 9px 0px rgba(145, 158, 171, 0.12),0px 1px 3px 0px rgba(145, 158, 171, 0.12),0px 3px 3px -2px rgba(145, 158, 171, 0.12)",
      "0px 4px 4px -1px rgba(145, 158, 171, 0.12),0px 0px 5px 0px rgba(145, 158, 171, 0.12),0px 1px 10px 0px rgba(145, 158, 171, 0.12)",
      "0px 6px 6px -1px rgba(145, 158, 171, 0.12),0px -1px 10px 0px rgba(145, 158, 171, 0.12),0px 1px 14px 0px rgba(145, 158, 171, 0.12)",
      "0px 6px 6px -1px rgba(145, 158, 171, 0.2),0px -2px 12px 0px rgba(145, 158, 171, 0.2),0px 1px 18px 0px rgba(145, 158, 171, 0.2)",
      ...defaultTheme.shadows
        .slice(6)
        .map(
          () =>
            "0px 6px 6px -1px rgba(145, 158, 171, 0.2),0px -2px 12px 0px rgba(145, 158, 171, 0.2),0px 1px 18px 0px rgba(145, 158, 171, 0.2)"
        ),
    ] as any,
  })
);
export const darkTheme = responsiveFontSizes(
  customizeTheme({ palette: { mode: "dark" } })
);

export function customizeTheme(theme: ThemeOptions = {}) {
  const defaultTheme = createTheme(theme);

  return createTheme({
    ...defaultTheme,
    breakpoints: {
      values: {
        xs: 0,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        "2xl": 1536,
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: ["Work Sans", "sans-serif", "Roboto"].join(),
      button: {
        textTransform: "none",
      },
      body1: {
        fontSize: "1.25rem", // 20px
        fontWeight: "500",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "1rem", // 16px for mobile
        },
      },
      body2: {
        fontSize: "1rem", // 16px
        fontWeight: "500",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "0.875rem", // 14px for mobile
        },
      },
      small: {
        fontSize: "0.875rem", // 14px
        fontWeight: "500",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "0.75rem", // 12px for mobile
        },
      },
      caption: {
        fontSize: "0.625rem", // 10px
        fontWeight: "700",
        letterSpacing: "3%",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "0.5rem", // 8px for mobile
        },
      },
      h1: {
        fontSize: "2rem", // 64px
        fontWeight: "700",
        letterSpacing: "-2%",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "1.5rem", // 40px for mobile
        },
      },
      h2: {
        fontSize: "2.5rem", // 40px
        fontWeight: "700",
        letterSpacing: "-2%",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "2rem", // 32px for mobile
        },
      },
      h3: {
        fontSize: "1rem", // 24px
        fontWeight: "700",
        letterSpacing: "-2%",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "0.85rem", // 20px for mobile
        },
      },
      h4: {
        fontSize: "1.65rem", // 36px
        fontWeight: "600",
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "1.25rem", // 28px for mobile
        },
      },
      h5: {
        fontSize: "1.875rem", // 30px
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "1.5rem", // 24px for mobile
        },
      },
      h6: {
        fontSize: "1.05rem", // 28px
        fontFamily: `${work_sans.style.fontFamily}, serif`,
        [defaultTheme.breakpoints.down("sm")]: {
          fontSize: "0.95rem", // 20px for mobile
        },
      },
    },
    components: {
      MuiIcon: {
        defaultProps: {
          baseClassName: "material-symbols-outlined",
        },
      },
      MuiTabs: {
        defaultProps: {
          variant: "scrollable",
          scrollButtons: "auto",
          allowScrollButtonsMobile: true,
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            minWidth: 150,
            fontSize: "1rem",
          },
        },
      },
      MuiLink: {
        defaultProps: {
          variant: "body1",
        },
        styleOverrides: {
          root: ({ theme }) => ({ fontWeight: "bold" }),
        },
      },
      MuiButton: {
        styleOverrides: {
          sizeMedium: {
            fontSize: 14,
          },
          sizeLarge: {
            fontSize: 16,
          },
        },
        variants: [
          {
            props: { variant: "contained" },
            style: {
              borderRadius: 8,
            },
          },
          {
            props: { variant: "contained", color: "primary" },
            style: {
              borderRadius: 16,
              background: "#0063DB",
              color: "#E6EAEE",
              ":hover": {
                color: "#fff",
                background: "#0063DB",
              },
              ":focus": {
                color: "#fff",
                background: "#0063DB",
              },
              ":active": {
                color: "#fff",
                background: "#0063DB",
              },
            },
          },
          {
            props: { variant: "containedGrey" },
            style: {
              borderRadius: 8,
              background: "#F7F7F7",
              color: "#6C6C6C",
              fontSize: 14,
              ":hover": {
                backgroundColor: "#FFFFFF",
                color: "#6C6C6C",
              },
              ":focus": {
                backgroundColor: "#FFFFFF",
                color: "#6C6C6C",
              },
              ":active": {
                backgroundColor: "#FFFFFF",
                color: "#6C6C6C",
              },
              ":selected": {
                backgroundColor: "#FFFFFF",
                color: "#6C6C6C",
              },
            },
          },

          {
            props: { variant: "outlined" },
            style: {
              borderRadius: 16,
            },
          },

          {
            props: { variant: "outlined" },
            style: {
              borderRadius: 16,
            },
          },
          {
            props: { variant: "containedSecondary" },
            style: {
              borderRadius: 16,
              background: "#E4F1FF",
              color: "#038A30",
              ":hover": {
                background: "#E4F1FF",
                color: "#038A30",
              },
              ":focus": {
                background: "#E4F1FF",
                color: "#038A30",
              },
              ":active": {
                background: "#E4F1FF",
                color: "#038A30",
              },
            },
          },
          {
            props: { variant: "containedSuccess" },
            style: {
              borderRadius: 8,
              border: "1px solid #20BF55",
              background: "#EEFEF6",
              color: "#038A30",
              ":hover": {
                background: "#EEFEF6",
                color: "#038A30",
              },
              ":focus": {
                background: "#EEFEF6",
                color: "#038A30",
              },
              // ":active": {
              //   background: "#EEFEF6",
              //   color: "#038A30",
              // },
            },
          },
          {
            props: { variant: "containedInfo" },
            style: {
              borderRadius: 16,
              border: "1px solid #EBF8FF",
              background: "#EBF8FF",
              color: "#004898",
              ":hover": {
                background: "#EBF8FF",
                color: "#004898",
              },
              ":focus": {
                background: "#EBF8FF",
                color: "#004898",
              },
              ":active": {
                background: "#EBF8FF",
                color: "#004898",
              },
            },
          },
          {
            props: { variant: "text" },
            style: {
              borderRadius: 8,
            },
          },
          {
            props: { variant: "linkSecondary" },
            style: {
              borderRadius: 16,
              background: "#fff",
              color: "#0063DB",
              textDecoration: "underline",
              ":hover": {
                opacity: 0.8,
                background: "#F3F8FF",
                textDecoration: "underline",
              },
              ":focus": {
                background: "#F3F8FF",
                opacity: 0.8,
                textDecoration: "underline",
              },
              ":active": {
                background: "#F3F8FF",
                opacity: 0.8,
                textDecoration: "underline",
              },
            },
          },
        ],
      },
      MuiInputBase: {
        styleOverrides: {},
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: "xs",
        },
      },
      MuiPaper: {
        defaultProps: {},
        variants: [],
      },
      MuiChip: {
        variants: [
          {
            props: { size: "medium" },
            style: () => ({
              height: 40,
              borderRadius: 32,
              textTransform: "capitalize",
              "& .MuiChip-icon": {
                marginLeft: 12,
                marginRight: -6,
              },
            }),
          },
        ],
      },
    },
  });
}
export const breakpoints = customizeTheme().breakpoints;

export default responsiveFontSizes(lightTheme);
