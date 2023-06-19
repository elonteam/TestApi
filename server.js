// See https://github.com/typicode/json-server#module
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('https://c7092721-8809-4abc-834e-bc282fb22f6d.id.repl.co/index.php?server=AKfycbwclZ3v6Ow2lDnCRWtU2j3RrLC9ciqY8VvjvMYyn7Tsi-QOUDQvKkWWdVMOMMe3j47Vbg&id=TM4YTO0MTM2gjNzgjM5gQzN&type=meensgroup')
const middlewares = jsonServer.defaults()

server.use(middlewares)
// Add this before server.use(router)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
