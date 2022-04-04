import { THEME_NAMES } from '../../hooks/use-theme/types.d'
import { THEME_CONEXT_STATE } from './types.d'

export const DEFAULT_THEME_STATE: THEME_CONEXT_STATE = {
  theme: THEME_NAMES.LIGHT,
  setTheme: () => null
}

export const BREAKPOINTS = {
  LARGE: 1100,
  MEDIUM: 900,
  SMALL: 700,
  TINY: 500,
}