import React from 'react'
import PostService from './services/PostService'
import { useQuery } from 'react-query'

function App() {
  const { data } = useQuery('posts', async () => {
    return (await PostService.list()).data
  })

  console.log(data)

  return (
    <div>🏝</div>
  )
}

export default App
