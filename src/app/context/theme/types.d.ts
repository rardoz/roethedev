import { THEME_NAMES, SetTheme } from '../../hooks/use-theme/types'

export interface THEME_CONEXT_STATE {
    theme: THEME_NAMES,
    setTheme: SetTheme
}