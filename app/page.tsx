'use client'
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '~/approute'
import { useState, useEffect } from 'react'
export default function Home() {
  
  const [message, setMessage] = useState<string | undefined>(undefined)

  const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api',
    }),
  ],
})

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await client.hello.query('World')
      setMessage(response)
    }
    fetchMessage()
  }, [])

  if (!message) return <p>Loading...</p>

  return <p>{message}</p>
}
