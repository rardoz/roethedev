import { useEffect, useState } from 'react'

const useLockScroll = ( locked?: boolean ): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [ isLocked,
    setLocked ] = useState( locked || false )

  useEffect( () => {
    document.body.classList[ isLocked ? 'add' : 'remove' ]( 'app-lock-scroll' )
    return () => {
      document.body.classList.remove( 'app-lock-scroll' )
    }
  },
  [ isLocked ] )
  return [ isLocked, setLocked ]
}

export default useLockScroll
