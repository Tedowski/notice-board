import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../types/Post'

interface PostThumbnailProps {
  post: Post
}

export default function PostThumbnail({ post }: PostThumbnailProps) {
  return <Link to={`posts/${post.id}`}>{post.title}</Link>
}
