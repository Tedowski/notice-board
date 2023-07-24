import React from 'react'
import PostThumbnail from '../components/PostThumbnail'
import PostService from '../services/PostService'
import { useQuery } from 'react-query'

function Home() {
  const { data: posts } = useQuery('posts', async () => {
    return (await PostService.list()).data
  })

  return (
    <div>{posts?.map((post: any) => <PostThumbnail post={post} />)}</div>
  )
}

export default Home
