import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { trpcServer } from '@hono/trpc-server' 
import { appRouter } from "~/approute"

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.use(
  '*',
  trpcServer({
    router: appRouter,
  })
)

export const GET = handle(app)
