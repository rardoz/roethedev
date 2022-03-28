/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const env = require( 'dotenv' )
const fs = require( 'fs' )
const path = require( 'path' )
const tokens = env.config().parsed
const htmlPath = path.join( process.cwd(), 'dist/index.html' )
const data = fs.readFileSync(  process.cwd()  +  '/dist/index.html' )

Object.keys( tokens ).forEach( key => {
  console.log( key )
  fs.writeFileSync(
    htmlPath, 
    data.toString().replace(
      new RegExp( `{{{%${key}%}}}`, 'g' ),
      tokens[ key ]
    ), { encoding: 'utf-8' } )
} )
