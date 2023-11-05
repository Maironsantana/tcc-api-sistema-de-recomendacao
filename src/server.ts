import express from 'express'

import { Router, Request, Response } from 'express';
import { router } from './routes';
import { errorMiddleware } from './middlewares/error';

const app = express();


app.use(express.json())
const port = process.env.PORT || 3000;

app.use(router)

app.use(errorMiddleware)

app.listen(port, () => console.log("server online!"))