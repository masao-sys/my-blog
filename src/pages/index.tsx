import { GetStaticProps } from 'next'
// import Image from 'next/image'
import PostList from '@/components/organisms/post/PostList'
import Layout from '@/components/templates/Layout'
import { client } from '@/libs/client'
import { PostsListResponse } from '@/types/index'

type Props = {
  postsResponse: PostsListResponse
}

const Home = ({ postsResponse }: Props) => {
  return (
    <Layout>
      <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
        <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
        <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
          <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
            MASAO BLOG
          </h1>
        </div>
      </section>
      <PostList posts={postsResponse.contents} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const postsResponse: PostsListResponse = await client.get({
    endpoint: 'posts',
  })
  const props: Props = {
    postsResponse: postsResponse,
  }

  return {
    props: props,
  }
}

export default Home
