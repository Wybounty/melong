import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello from the Hono server!'))

app.fire()  // Starts the server
