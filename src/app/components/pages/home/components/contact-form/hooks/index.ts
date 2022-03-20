import useFetch from 'use-http'

export const useSubmitContactForm = ():[
    onSubmit: ( formData: FormData ) => void, 
    response?: unknown,
    loading?: boolean,
    error?: Error
] => {
  const {  post, response, loading, error } = useFetch( `${process.env.APP_API_BASE_URL}/v1/contact-form` )

  const onSubmit = ( formData: FormData ): void => {
    const data: Record<string, unknown>  = {}
    formData.forEach( ( value, key ) => {
      data[ key ]  = value
    } )
    
    post( data )
  }
  console.log( response.data, loading, error )
  return [ onSubmit, response, loading, error ]
}