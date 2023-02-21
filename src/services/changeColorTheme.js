export const changeColorTheme = (name) => {
    const themeStyles = document.querySelector(":root");

    const arrVariablse = ["header", "bgimage"];
    arrVariablse.forEach(element => {
        themeStyles.style.setProperty(`--theme-default-${element}`, `var(--theme-${name}-${element})`)   
    });
};