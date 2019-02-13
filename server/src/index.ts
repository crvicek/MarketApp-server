// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import AddController from "./adds/controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
   controllers: [
      AddController
   ]
})

setupDb()
  .then(_ =>
   app.listen(port, () => console.log(`Listening on port ${port}`))
   //  app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))

