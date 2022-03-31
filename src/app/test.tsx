import React from 'react'
import { render } from '@testing-library/react'

describe( 'App',
  () => {
    it( 'should render',
      () => {
        expect( render( <div /> ).baseElement ).toMatchSnapshot()
      } )
  } )
