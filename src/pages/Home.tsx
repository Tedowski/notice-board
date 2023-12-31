import React from 'react'
import PostThumbnail from '../components/PostThumbnail'
import PostService from '../services/PostService'
import { useQuery } from 'react-query'
import { Col, Row, Space, Spin } from 'antd'

function Home() {
  const { data: posts, isLoading } = useQuery('posts', async () => (await PostService.list()).data)

  return (
    <Row justify="center" style={{ paddingTop: 50 }}>
      <Col>
        {isLoading && <Spin size="large"/>}
        {!isLoading &&
            <Space direction="vertical" size={16}>{posts?.map((post) => <PostThumbnail key={post.id} post={post}/>)}</Space>}
      </Col>
    </Row>
  )
}

export default Home
