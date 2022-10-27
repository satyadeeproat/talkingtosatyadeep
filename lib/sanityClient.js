import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '3223', // you can find this in sanity.json
  dataset: 'hetklhelk', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})