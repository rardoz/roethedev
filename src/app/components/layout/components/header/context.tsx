import React, { createContext, useContext } from 'react'
import useLockScroll from '../../../../hooks/use-lock-scroll'

interface HeaderContextState {
    state: { toggled: boolean; }; 
    dispatch: { setToggled: React.Dispatch<React.SetStateAction<boolean>>; }; 
}

const DEFAULT_STATE: HeaderContextState = { 
  state: { toggled: false }, 
  dispatch: { setToggled: ( value: React.SetStateAction<boolean> ) => {
    console.warn( 'No dispatch set for header context. Value is: ', value )
  } }
}

const context = createContext( DEFAULT_STATE )
const { Provider } = context

export const HeaderContext: React.FC = ( { children } ) => {
  const [ 
    toggled,
    setToggled ] = useLockScroll( false )

  console.log( toggled )

  return <Provider value={{ state: { toggled }, dispatch: { setToggled } }}>{children}</Provider>
}

export const useHeaderToggled = () : [boolean, HeaderContextState["dispatch"]["setToggled"]] => {
  const { state: { toggled }, dispatch: { setToggled } } = useContext( context )
  return [ toggled, setToggled ]
}

export default context