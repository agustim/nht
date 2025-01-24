import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { cors } from 'hono/cors'

const app = new Hono().basePath('/api')
if (process.env.NODE_ENV === 'development') 
    app.use("*", cors({ origin: "http://localhost:3000" }))

export const route = app
    .get('/hello', zValidator('query', z.object({ name: z.string() })), (ctx) => {
        const { name } = ctx.req.valid('query')
        return ctx.json({ message: `Hello ${name}!` })
    })
    .get('/bye', zValidator('query', z.object({ name: z.string() })), (ctx) => {
        const { name } = ctx.req.valid('query')
        return ctx.json({ message: `Hello ${name}!` })
    })

export type AppType = typeof route
