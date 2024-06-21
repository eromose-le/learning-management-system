import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    purple: Palette["primary"];
    maize: maize["primary"];
    yellow: yellow["primary"];
    pink: pink["primary"];
    richEBlue: richEBlue["primary"];
    carolinaBlue: carolinaBlue["primary"];
    malachite: carolinaBlue["primary"];
    appGray: Palette["primary"];
  }
  interface PaletteColor {
    lighter?: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
  }

  interface PaletteOptions {
    purple?: PaletteColorOptions;
    maize?: PaletteColorOptions;
    yellow?: PaletteColorOptions;
    pink?: PaletteColorOptions;
    richEBlue?: PaletteColorOptions;
    carolinaBlue?: PaletteColorOptions;
    malachite?: PaletteColorOptions;
    appGray?: PaletteColorOptions["primary"];
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    "2xl": true;
  }
  interface TypographyVariants {
    body3: React.CSSProperties;
    body2: React.CSSProperties;
    small: React.CSSProperties;
    link: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body3?: React.CSSProperties;
    body2?: React.CSSProperties;
    small?: React.CSSProperties;
    link?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    containedSecondary: true;
    containedGrey: true;
    linkSecondary: true;
    containedSuccess: true;
    containedInfo: true;
    outlinedGrey: true;
    appGray: true;
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    outlinedOpaque: true;
    outlinedBox: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    body2: true;
    small: true;
    h4: true;
    h5: true;
    h6: true;
    link: true;
  }
}
