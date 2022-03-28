/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const env = require( 'dotenv' )
const fs = require( 'fs' )
const path = require( 'path' )
const tokens = env.config().parsed
const htmlPath = path.join( process.cwd(), 'dist/index.html' )
let data = fs.readFileSync(  htmlPath ).toString()

Object.keys( tokens ).forEach( key => {
  data = data.replace(
    new RegExp( `{{{%${key}%}}}`, 'g' ),
    tokens[ key ]
  )
} )

fs.writeFileSync(
  htmlPath, 
  data, { encoding: 'utf-8' } )