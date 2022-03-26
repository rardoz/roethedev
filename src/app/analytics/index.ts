import ReactGA, { EventArgs } from "react-ga"

const GA_DEBUG = process.env.GA_DEBUG
const GA_TRACKING_ID = process.env.GA_TRACKING_ID

const init = ():void => {
  if( GA_TRACKING_ID ) {
    ReactGA.initialize( GA_TRACKING_ID, { debug: `${GA_DEBUG}`.toLowerCase() === "true" } )
  } else {
    console.error( "GA_TRACKING_ID env variable not set" )
  }
}

const sendEvent = ( payload: EventArgs ):void => {
  ReactGA.event( payload )
}

const sendPageview = ( path: string ):void => {
  ReactGA.set( { page: path } )
  ReactGA.pageview( path )
}

export default {
  init,
  sendEvent,
  sendPageview,
}