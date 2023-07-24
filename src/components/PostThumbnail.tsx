import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../types/Post'
import { Card } from 'antd'

interface PostThumbnailProps {
  post: Post
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  return (
    <Card title={post.title} extra={<Link to={`posts/${post.id}`}>detail</Link>}>
      <p>{post.body.slice(0, 50) + '...'}</p>
    </Card>
  )
}
