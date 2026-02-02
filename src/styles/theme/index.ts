import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontSize: 16,
        fontFamily: '"Inter"',

        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 600,

        caption: {
            fontSize: "1rem",
            lineHeight: 1.5,
            fontWeight: 500,
        },
        h3: {
            fontSize: "1rem",
            fontWeight: 600,
            lineHeight: 1.5,
        },
    },

    cssVariables: true,
    colorSchemes: { light: {}, dark: {} },
});

export default theme;
