import { Card } from 'antd'
import Title from 'antd/es/typography/Title'
import React from 'react'
import { useQuery } from 'react-query'
import UserService from '../services/UserService'
import { User } from '../types/User'

interface AuthorBoxProps {
  userId: number
}

export default function AuthorBox({ userId }: AuthorBoxProps) {
  const { data: user } = useQuery([ 'user', userId ], async () => (await UserService.get(userId)).data as User)

  return (
    <Card title="Author">
      <Title level={5} style={{ marginTop: 0 }}>{user?.name}</Title>
      <p>{user?.phone}</p>
      <p>{user?.email}</p>
      <p>{user?.website}</p>
    </Card>
  )
}
