/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const env = require( 'dotenv' ) 
const fs = require( 'fs' )
const tokens = env.config().parsed
const data = fs.readFileSync( './dist/index.html' )

Object.keys( tokens ).forEach( key => {
  fs.writeFileSync(
    './dist/index.html', 
    data.toString().replace(
      new RegExp( `{{{%${key}%}}}`, 'g' ),
      tokens[ key ]
    ), { encoding: 'utf-8' } )
} )
