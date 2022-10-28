import groq from 'groq'
import client from '../../client'
import BlogLayout from '../../layouts/blog';


const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src=""
        />
      )
    }
  }
}

const Post = ({post}) => {
  console.log('njeknkenkeebnjek', post);
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
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    }
  }
}
export default Post