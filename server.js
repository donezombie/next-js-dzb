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

  server.get('/posts/:post', (req, res) => {
    return app.render(req, res, '/posts/[post]', { post: req.params.post })
  })

  server.get('/users/:user', (req, res) => {
    return app.render(req, res, '/users/[user]', { user: req.params.user });
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})