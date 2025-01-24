import { handle } from 'hono/vercel'
import { route } from '../../trpc/approute'

export const runtime = 'edge'

export const GET = handle(route)
export const POST = handle(route)
export const DELETE = handle(route)
export const PATCH = handle(route)
export const PUT = handle(route)
