import { GetStaticProps } from 'next'
import Image from 'next/image'
// import PostList from '@/components/organisms/post/PostList'
// import Layout from '@/components/templates/Layout'
import { client } from '@/libs/client'
import { PostsListResponse } from '@/types/index'

type Props = {
  postsResponse: PostsListResponse
}

const Home = ({ postsResponse }: Props) => {
  const posts = postsResponse.contents
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {posts.map((post) => {
            // eslint-disable-next-line react/jsx-key
            return <div>{post.title}</div>
          })}
        </div>
    </>
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
