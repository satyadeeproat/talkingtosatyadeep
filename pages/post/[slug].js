import groq from 'groq'
import client from '../../client'
import BlogLayout from '../../layouts/blog';


import imageUrlBuilder from '@sanity/image-url'

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source) {
  return builder.image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img src={urlFor(value).width(500).url()} />
      )
    }
  }
}

const Post = ({post}) => {
  if(!post) {
    post = {
      title: '',
      name: '',
      body: []
    }
  }
  const {
    title = 'Missing title',
    name = 'Missing name',
    body = []
  } = post
  return (
    <BlogLayout
      title={title}
      body={body}
      name={name}
      ptComponents={ptComponents}
    />
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post