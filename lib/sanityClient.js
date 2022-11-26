import sanityClient from '@sanity/client'

export default sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'aqz40awr',
  useCdn: true // `false` if you want to ensure fresh data
})