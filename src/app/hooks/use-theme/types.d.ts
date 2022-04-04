export enum THEME_NAMES {
    LIGHT = 'light',
    DARK = 'dark',
}

export type SetTheme = ( theme: THEME_NAMES ) => void
type UseTheme = [THEME_NAMES, SetTheme]