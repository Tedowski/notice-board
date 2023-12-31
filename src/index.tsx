import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
