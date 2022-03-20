import useFetch from 'use-http'

export const useSubmitContactForm = ():{
    onSubmit: ( formData: FormData ) => void, 
    data?: Record<string, unknown>
    loading?: boolean,
    message?: string
} => {
  const {  post, response, loading, error } = useFetch( `${process.env.APP_API_BASE_URL}/v1/contact-form` )

  const onSubmit =  ( formData: FormData ):void  => {
    const data: Record<string, unknown>  = {}
    formData.forEach( ( value, key ) => {
      data[ key ]  = value
    } )
    
    post( data )
  }
  return {
    onSubmit,
    data: response.data || {},
    loading: loading,
    message: 
     error?.message  || !response.data?.success ? "There was an error! Try again or email me directly at robert@byrojo.com." : response.data?.message
  }
}