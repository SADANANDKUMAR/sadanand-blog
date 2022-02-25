
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Form,Button,Container,Row,Col} from 'react-bootstrap'
import "../compontents/header"
import Home from './Home'


export default function index() {
  return (
<div>
<Home/>
</div>
  )
}

// import Link from 'next/link'
// import groq from 'groq'
// import client from '../client'

// const Index = ({posts}) => {
//     return (
//       <div>
//         <h1>Welcome to a blog!</h1>
//         {posts.length > 0 && posts.map(
//           ({ _id, title = '', slug = '', publishedAt = '' }) =>
//             slug && (
//               <li key={_id}>
//                 <Link href="/post/[slug]" as={`/post/${slug.current}`}>
//                   <a>{title}</a>
//                 </Link>{' '}
//                 ({new Date(publishedAt).toDateString()})
//               </li>
//             )
//         )}
//       </div>
//     )
// }

// export async function getStaticProps() {
//     const posts = await client.fetch(groq`
//       *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
//     `)
//     return {
//       props: {
//         posts
//       }
//     }
// }

// export default Index