import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    title: "light",

    color: {
        background: "#F2F2F2",
        paper: "#3E3E40",
        primary: "#252426",
        secundary: "#8C8C8C",

        text: "#3E3E40",
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
    MinSize: {
        Large: "1000px",
    },
};

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
export default Theme;
