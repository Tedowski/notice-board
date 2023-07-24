import { Card } from 'antd'
import React from 'react'

interface CommentBoxProps {
  comment: any
}

export default function CommentBox({ comment }: CommentBoxProps) {
  return (
    <Card title={comment.name} extra={comment.email}>
      <p>{comment.body}</p>
    </Card>
  )
}
