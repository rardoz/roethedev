import React, { createContext } from 'react'
import { useTheme } from '../../hooks/use-theme'
import { DEFAULT_THEME_STATE } from './constants'

const context = createContext( DEFAULT_THEME_STATE )
const { Provider } = context

export const ThemeProvider: React.FC = ( { children } ) => {
  const [
    theme,
    setTheme 
  ] = useTheme()
  
  return ( 
    <Provider
      value={
        {
          theme,
          setTheme 
        }
      }
    >
      {children}
    </Provider> 
  )
}

export default context