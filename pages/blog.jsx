import Layout from '../components/Layout';
import Link from 'next/link'

const PostLink = ({title}) => (
    <li>
        <Link as={`/${title}-post`} href={`/post?title=${title}`}><a>{title}</a></Link>
    </li>
)

export default () => (
    <Layout title="My Blog">
        <ul>
            <PostLink title="React"/>
            <PostLink title="Angular"/>
            <PostLink title="Vue"/>
        </ul>
    </Layout>
)