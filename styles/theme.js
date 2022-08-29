import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    title: "light",

    color: {
        background: "#f5f5f5",

        primary: "#fee6c8",
        secundary: "#fff6e7",

        text: "#414141",
    },

    font: {
        primary: "helvetica neue, helvetica, arial, sans-serif",
        secundary: "Roboto Slab",
    },

    size: {
        sz30: "30px",
        sz20: "20px",
        sz15: "15px",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
