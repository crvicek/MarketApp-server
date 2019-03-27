import { JsonController, Get, Param, Post, Put, HttpCode, Body, NotFoundError, Delete, OnUndefined, Authorized } from 'routing-controllers'
import User from './entity'

@JsonController()
export default class UsersController {

  @Authorized()
  @Get('/users/:id')
  getUser(
    @Param('id') id: number
  ) {
    return User.findOne(id)
  }

  @Post('/users')
  @HttpCode(201)
  async createUser(
    @Body() user: User
  ) {
    const { password, ...rest } = user
    const entity = User.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }

  @Authorized()
  @Put('/users/:id')
  async updateUser(
    @Param('id') id: number,
    @Body() update: Partial<User>
  ) {
    const user = await User.findOne(id)
    if (!user) throw new NotFoundError('Cannot find user')

    return User.merge(user, update).save()
  }

  @Authorized()
  @Delete('/users/:id')
  @OnUndefined(204)
  deleteUser(
    @Param('id') id: number,
  ) {
    return User.delete(id)
  }

}