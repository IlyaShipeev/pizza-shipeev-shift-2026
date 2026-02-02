import { createTheme } from "@mui/material/styles";
const textColors = {
    primary: "#141C24",
    secondary: "#344051",
};

const theme = createTheme({
    palette: {
        text: textColors,
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Inter"',
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,
        body1: {
            color: textColors.primary,
            fontWeightMedium: 500,
            fontSize:16,
        },
        body2: {
            color: textColors.primary,
            fontWeightRegular: 400,
        },
        caption: {
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 500,
        },
        h3: {
            fontSize: "1.5rem",
            fontWeight: 600,
            lineHeight: 1.5,
            color: textColors.primary,
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 700,
            color: textColors.primary,
            lineHeight: 1.5,
        },
    },
    cssVariables: true,
    colorSchemes: { light: {}, dark: {} },
});

export default theme;
