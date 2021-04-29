import {Request, Response} from 'express'
import express = require('express')

let server = express()

server.get('/', (req: Request, res: Response) => {
	res.send('Hello Word!')
	console.log(req)
})

server.listen(2000, () => {
	console.log('http server listen on : 6000')
})
