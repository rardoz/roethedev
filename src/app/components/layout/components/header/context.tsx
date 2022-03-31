import React, { createContext, useContext, useCallback, useRef, useEffect, KeyboardEvent } from 'react'
import useLockScroll from '../../../../hooks/use-lock-scroll'
import { useResizeDetector } from 'react-resize-detector'

interface HeaderContextState {
  state: { toggled: boolean }
  dispatch: { setToggled: React.Dispatch<React.SetStateAction<boolean>> }
}

const DEFAULT_STATE: HeaderContextState = {
  state: { toggled: false },
  dispatch: {
    setToggled: ( value: React.SetStateAction<boolean> ) => {
      console.warn( 'No dispatch set for header context. Value is: ',
        value )
    },
  },
}

const context = createContext( DEFAULT_STATE )
const { Provider } = context

export const HeaderContext: React.FC = ( { children } ) => {
  const [ toggled,
    setToggled ] = useLockScroll( false )

  const onResize = useCallback( () => {
    if ( toggled ) {
      setToggled( parseFloat( getComputedStyle( document.body ).width ) < 1200 )
    }
  },
  [ toggled, setToggled ] )

  useEffect( () => {
    if ( toggled ) {
      const onEscPressed: EventListener = ( e ): void => {
        const keyDownEvent = e as unknown as KeyboardEvent
        if ( keyDownEvent.key === 'Escape' ) {
          setToggled( false )
        }
        return
      }

      document.body.addEventListener( 'keydown',
        onEscPressed )
      return () => {
        document.body.removeEventListener( 'keydown',
          onEscPressed )
      }
    }
  },
  [ toggled, setToggled ] )

  useResizeDetector( { onResize, handleHeight: false, handleWidth: true, targetRef: useRef( document.body ) } )
  return <Provider value={{ state: { toggled }, dispatch: { setToggled } }}>{children}</Provider>
}

export const useHeaderToggled = (): [boolean, HeaderContextState['dispatch']['setToggled']] => {
  const {
    state: { toggled },
    dispatch: { setToggled },
  } = useContext( context )

  return [ toggled, setToggled ]
}

export default context
