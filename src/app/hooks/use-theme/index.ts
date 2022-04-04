import { useState, useEffect } from 'react'
import { THEME_NAMES, UseTheme } from './types.d'

const detectDefaultMode = (): THEME_NAMES => {
  if ( window.matchMedia && 
    window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) { 
    return THEME_NAMES.DARK
  }
  return THEME_NAMES.LIGHT
}

//the earlier the better
let defaultMode = detectDefaultMode()
const body = document.getElementsByTagName( 'body' )[ 0 ]

export const useTheme = (): UseTheme => {
  const [
    theme,
    setTheme 
  ] = useState( defaultMode )

  useEffect( () => {
    if( !defaultMode ) {
      defaultMode = defaultMode || detectDefaultMode()
      setTheme( defaultMode )
    }
    //clear any previously set themes
    body.className = body.className.replace( 
      /app-theme-[a-z]+/g,
      '' 
    )
    body.classList.add( `app-theme-${theme}` )
  },
  [
    theme 
  ] )

  return [
    theme,
    setTheme
  ]
}