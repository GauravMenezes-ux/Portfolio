import Layout from '../components/Layout'
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout title={router.query.title}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero quod officiis tempora, neque delectus atque nihil quasi! Officia, error quod quos repudiandae atque voluptatem doloribus rem soluta, a, adipisci numquam.</p>
    </Layout>
)

export default withRouter(Post);

