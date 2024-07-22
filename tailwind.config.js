/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            fontWeight: {
                light: 300,
                normal: 400,
                medium: 500,
                semibold: 600,
                bold: 700,
            },
            fontSize: {
                xxs: "0.625rem",
                xs: "0.75rem",
                sm: "0.875rem",
                base: "1rem",
                lg: "1.125rem",
                xl: "1.25rem",
                "2xl": "1.5rem",
                "3xl": "1.875rem",
                "4xl": "2.25rem",
                "5xl": "3rem",
                "6xl": "4rem",
                "7xl": "5rem",
                "8xl": "6rem",
                "9xl": "8rem",
            },
            backgroundColor: (theme) => ({
                ...theme("colors"),
                primary: "#F5F5F5",
                "primary-light": "#FFD9B3",
                "primary-dark": "#FF3A00",
                bg: "#F5F5F5",
                "bg-light": "#FFFFFF",
                "bg-dark": "#E0E0E0",
            }),
            textColor: (theme) => ({
                ...theme("colors"),
                primary: "#FF6C00",
                title: "#26303E",
                subtitle: "#5C6672",
                border: "#D8D9DD",
                purple: "#4F359B",
            }),
            colors: {
                bg: {
                    DEFAULT: "#F5F5F5",
                },
                primary: {
                    DEFAULT: "#FF6C00",
                    100: "#FFD9B3",
                    200: "#FFC285",
                    300: "#FFB056",
                    400: "#FFA028",
                    500: "#FF6C00",
                    600: "#FF3A00",
                    700: "#FF0700",
                    800: "#CC0600",
                    900: "#990400",
                },
                title: {
                    DEFAULT: "#26303E",
                    100: "#F5F5F5",
                    200: "#E0E0E0",
                    300: "#BDBDBD",
                    400: "#9E9E9E",
                    500: "#757575",
                    600: "#616161",
                    700: "#424242",
                    800: "#212121",
                    900: "#000000",
                },
                subtitle: {
                    DEFAULT: "#5C6672",
                    100: "#F5F5F5",
                    200: "#E0E0E0",
                    300: "#BDBDBD",
                    400: "#9E9E9E",
                    500: "#757575",
                    600: "#616161",
                    700: "#424242",
                    800: "#212121",
                    900: "#000000",
                },
                border: {
                    DEFAULT: "#D8D9DD",
                    100: "#F5F5F5",
                    200: "#E0E0E0",
                    300: "#BDBDBD",
                    400: "#9E9E9E",
                    500: "#757575",
                    600: "#616161",
                    700: "#424242",
                    800: "#212121",
                    900: "#000000",
                },
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
