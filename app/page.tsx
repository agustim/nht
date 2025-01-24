'use client'
import { AppType } from './trpc/approute'
import { hc } from 'hono/client'
import { useState, useEffect } from 'react'
export default function Home() {
  
  const [message, setMessage] = useState<string | undefined>(undefined)

  const client = hc<AppType>('http://localhost:8787')

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await client.api.hello.$get({ query: { name: 'Agustí' } })
      const data = await response.json()
      setMessage(data.message)
    }
    fetchMessage()
  }, [])

  if (!message) return <p>Loading...</p>

  return <p>{message}</p>
}
