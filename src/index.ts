import 'reflect-metadata'
import { Action, createKoaServer } from "routing-controllers"
import AdController from "./ads/controller"
import setupDb from './db'
import UsersController from './users/controller';
import LoginController from './auth/controller';
import { verify } from './auth/jwt'

const port = process.env.PORT || 4000

const app = createKoaServer({
   cors: true,
   controllers: [
      AdController,
      UsersController,
      LoginController,
   ],
   authorizationChecker: (action: Action) => {
      const header: string = action.request.headers.authorization
      if (header && header.startsWith('Bearer ')) {
         const [, token] = header.split(' ')
         return !!(token && verify(token))
      }
      return false
   },
   // Return id of the user based on the header token
   currentUserChecker: async (action: Action) => {
      const header: string = action.request.headers.authorization
      if (header && header.startsWith('Bearer ')) {
         const [, token] = header.split(' ')
         return verify(token).data.id
      }
      return false
   }
})

setupDb()
   .then(_ =>
      app.listen(port, () => console.log(`Listening on port ${port}`))
      //  app.listen(4000, () => console.log('Listening on port 4000'))
   )
   .catch(err => console.error(err))

