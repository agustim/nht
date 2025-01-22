import { Hono } from 'hono'
import { trpcServer } from '@hono/trpc-server' 
import { appRouter } from "~/approute"


const app = new Hono().basePath('/api')

app.use(
  '*',
  trpcServer({
    router: appRouter,
  })
)

export default app
