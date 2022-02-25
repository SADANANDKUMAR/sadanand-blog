import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import BlockContent from "@sanity/block-content-to-react";

 const builder = imageUrlBuilder(client)

function Post({ post }) {

  return (
    <article>

      <div style={{ padding: '10' }}>
        <div>
          {post && post.mainImage && <img style={{ margin: "auto", display: 'block' }} src={urlFor(post.mainImage).height(500).width(1200).url()} alt="" />}
          
           {/* Develop by sadanand kumar */}
          {/* <img src={urlFor(post.asset).width(500).height(300).url()}/> */}
          <div>
            <h4>{post?post.name:""}</h4>
          </div>

        </div>
        <h2 style={{ width: 'auto', backgroundColor: '#fcc6a4', border: '2px solid black', padding: '5px', margin: '100px' }}>
          {post?post.title:""}
        </h2>
        <div style={{ margin: '100px' }}>
          <BlockContent
            blocks={post?post.body:""}
            projectId={client.clientConfig.projectId}
            dataset={client.clientConfig.dataset}
            // projectId={'wpzlzo6y'}
            // dataset={client.dataset}
             />
        </div>
      </div>
    </article>
  );
}

function urlFor(source) {
    return builder.image(source)
  }


  
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
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
  return {
    props: {
      post

    }
  }
 }

export default Post