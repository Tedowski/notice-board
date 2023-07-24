import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'
import { GoldOutlined } from '@ant-design/icons'

import Home from './pages/Home'
import PostDetail from './pages/PostDetail'

const { Header, Content, Footer } = Layout

function App() {
  return (
    <Layout className="layout" style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <GoldOutlined style={{ color: '#fff', fontSize: 32 }} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'posts/:postId'} element={<PostDetail />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center', padding: '24px 0' }}>Created with ❤️ by Tadeas Kosek</Footer>
    </Layout>
  )
}

export default App
