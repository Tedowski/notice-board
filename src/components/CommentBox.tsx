import { Card } from 'antd'
import React from 'react'
import { Comment } from '../types/Comment'

interface CommentBoxProps {
  comment: Comment
}

export default function CommentBox({ comment }: CommentBoxProps) {
  return (
    <Card title={comment.name} extra={comment.email}>
      <p>{comment.body}</p>
    </Card>
  )
}
