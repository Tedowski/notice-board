import React from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../services/PostService'
import { useQuery } from 'react-query'

function PostDetail() {
  const { postId } = useParams() as any

  const { data: post } = useQuery(['post', postId], async () => {
    return (await PostService.get(postId)).data
  })

  return (
    <div>{post?.body}</div>
  )
}

export default PostDetail
