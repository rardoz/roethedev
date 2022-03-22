import React, { createContext, useContext, useEffect, KeyboardEvent } from 'react'
import useLockScroll from '../../hooks/use-lock-scroll'

interface MediaControllerContextState {
    state: { toggled: boolean; }; 
    dispatch: { setToggled: React.Dispatch<React.SetStateAction<boolean>>; }; 
}
 
const DEFAULT_STATE: MediaControllerContextState = { 
  state: { toggled: false }, 
  dispatch: { setToggled: ( value: React.SetStateAction<boolean> ) => {
    console.warn( 'No dispatch set for header context. Value is: ', value )
  } }
}

const context = createContext( DEFAULT_STATE )
const { Provider } = context

export const MediaControllerContextProvider: React.FC = ( { children } ) => {
  const [ 
    toggled,
    setToggled ] = useLockScroll( false )

  useEffect( () => {
    if( toggled ) {
      const onEscPressed: EventListener =  ( e ):void =>  {
        const keyDownEvent = ( e as unknown as KeyboardEvent )
        if( keyDownEvent.key === "Escape" ) {
          setToggled( false )
        }
        return
      }

      document.body.addEventListener( "keydown",  onEscPressed )
      return () => {
        document.body.removeEventListener( "keydown", onEscPressed )
      }
    }
  }, [ toggled, setToggled ] )

  return <Provider value={{ state: { toggled }, dispatch: { setToggled } }}>{children}</Provider>
}

export const useMediaControllerToggled = () : [boolean, MediaControllerContextState["dispatch"]["setToggled"]] => {
  const { state: { toggled }, dispatch: { setToggled } } = useContext( context )
  
  return [ toggled, setToggled ]
}

export default context