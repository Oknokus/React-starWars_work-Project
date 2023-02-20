export const changeColorTheme = (name) => {
    const themeStyles = document.querySelector(":root");

    themeStyles.style.setProperty("--theme-default-header", `var(--theme-${name}-header)`)
}