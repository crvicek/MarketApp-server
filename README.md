# MarketApp-server
Basic server (Node &amp; Koa) with DB for my [Market App](https://github.com/crvicek/MarketApp-client)

**Link of Heroku deployed version can be provided upon request**

## Features:
- Users can see the ads
- Users can sign up and log in to create ads
- Users can edit and delete ads

## Technologies used:
- Node.js
- TypeScript
- JWT&Bcrypt
- Docker
- Koa server
- TypeORM/postgres
- Routing Controllers

## Install instructions:
- GitClone, npm install, start docker/postgres on 5432, npm run start

## ToDo:
- [x] User can login
- [x] User can signup
- [x] Everybody can view ads
- [x] ~~Logged in user~~ everybody (=> **add validation**) can create/edit/delete ads
- [ ] Add pagination
- [ ] Add validation
