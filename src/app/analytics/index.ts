import ReactGA from "react-ga4"
import ReactGAForAds from "react-ga4"
import { UaEventOptions } from 'react-ga4/types/ga4'
const GA_TRACKING_ID = process.env.GA_TRACKING_ID || ''
const GA_AD_SENSE_TRACKING_ID = process.env.GA_AD_SENSE_TRACKING_ID || ''

const init = ():void => {
  if( GA_TRACKING_ID ) {
    ReactGA.initialize( GA_TRACKING_ID )
    if( GA_AD_SENSE_TRACKING_ID )
      ReactGAForAds.initialize( GA_AD_SENSE_TRACKING_ID )
  } else {
    console.error( "GA_TRACKING_ID env variable not set" )
  }
}

const sendEvent = ( payload: UaEventOptions ):void => {
  ReactGA.event( {
    nonInteraction: true,
    ...payload
  } )
  if( GA_AD_SENSE_TRACKING_ID )
    ReactGAForAds.event( {
      nonInteraction: true,
      ...payload
    } )
}

const sendPageview = ( path: string ):void => {
  ReactGA.set( { page: path } )
  ReactGA.send( { hitType: "pageview", page: path } )
  if( GA_AD_SENSE_TRACKING_ID ){
    ReactGAForAds.set( { page: path } )
    ReactGAForAds.send( { hitType: "pageview", page: path } )
  }
}

export default {
  init,
  sendEvent,
  sendPageview,
}