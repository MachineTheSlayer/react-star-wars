/*
Формат CSS-переменной:
--theme-default-УникальноеИмя # дефолтная переменная
--theme-light-УникальноеИмя   # для "light"
--theme-dark-УникальноеИмя    # для "dark"
--theme-neitral-УникальноеИмя # для "neitral"
*/

export const changeCssVariables = (theme) => {
    const root = document.querySelector(':root');

    // root.style.setProperty('--theme-default-header', `var(--theme-${theme}-header)`);
    // root.style.setProperty('--theme-default-bgimage', `var(--theme-${theme}-bgimage)`);

    const cssVariables = ['header', 'bgimage'];

    cssVariables.forEach(element => {
        root.style.setProperty(
            `--theme-default-${element}`, 
            `var(--theme-${theme}-${element})`
        );
    })
}