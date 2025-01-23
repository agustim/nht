# Simple example with nextjs hono and trpc

Based in https://github.com/honojs/starter/tree/main/templates/nextjs with nextjs and hono, and https://www.npmjs.com/package/@hono/trpc-server eith trpc.

```
npm install
npm run dev
```


## Prepare deploy 

Per desplegar el projecte utilitzarem:

1. Next.js en mode estàtic a Pages
2. /api/ el hono com a Workers


### Pages:
1. Crear a Cloudflare UI el pages connectat al git (si volem).
2. En el projecte, anem a la pestanya Custom domains, i afegim el domini.

### Workers:
3. Editem ```wrangler.toml``` posant my.domain.tld el domini que toca.

