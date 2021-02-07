import Layout from '../components/layout'
import Container from '../components/container'
import Header from '../components/header'
import Head from 'next/head'
import Post from '../types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Zachary's blog</title>
        </Head>
        <Container>
          <Header />
        </Container>
      </Layout>
    </>
  )
}

export default Index