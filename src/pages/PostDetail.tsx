import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AuthorBox from '../components/AuthorBox'
import CommentBox from '../components/CommentBox'
import CommentService from '../services/CommentService'
import PostService from '../services/PostService'
import { useQuery } from 'react-query'
import { Breadcrumb, Col, Divider, Row, Space, Spin, Typography } from 'antd'
import { Comment } from '../types/Comment'
import { Post } from '../types/Post'

const { Title, Text } = Typography

function PostDetail() {
  const { postId } = useParams()

  const { data: post, isLoading: isPostLoading } = useQuery([ 'post', postId ], async () => {
    return (await PostService.get(Number(postId))).data as Post
  })

  const { data: comments, isLoading: isCommentsLoading } = useQuery([ 'comments', postId ], async () => {
    return (await CommentService.list(Number(postId))).data as Comment[]
  })

  return (
    <>
      <Breadcrumb
        style={{ marginTop: 20 }}
        items={[
          {
            title: <Link to={'/'}>Home</Link>,
          },
          {
            title: 'Posts',
          },
          {
            title: postId,
          },
        ]}
      />
      {isPostLoading && <Row justify="center"><Col><Spin size="large"/></Col></Row>}
      {!isPostLoading && <>
          <Title level={3}>{post?.title}</Title>
          <Row gutter={16} style={{ padding: '50px 0' }}>
              <Col span={18}>
                  <Text>{post?.body}</Text>
              </Col>
              <Col span={6}>
                {post && <AuthorBox userId={post.userId}/>}
              </Col>
          </Row>
      </>}
      <Divider/>
      <Title level={5}>Comments</Title>
      {isCommentsLoading && <Spin/>}
      {!isCommentsLoading && <Space direction="vertical">
        {comments?.map((comment: Comment) => <CommentBox key={comment.id} comment={comment}/>)}
      </Space>}
    </>
  )
}

export default PostDetail
