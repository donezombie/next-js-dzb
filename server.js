const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/about-us', (req, res) => {
    return app.render(req, res, '/about-us', req.query)
  })

  server.get('/posts/:id', (req, res) => {
    return app.render(req, res, '/posts/post', { id: req.params.id })
  })

  server.get('/users/:id', (req, res) => {
    return app.render(req, res, '/users/user', { id: req.params.id });
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})