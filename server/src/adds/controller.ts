// src/pages/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers'
import Add from './entity'

@JsonController()
export default class AddController {
  
  @Get('/adds')
allPages() {
  const adds = Add.find()
  return  adds 
}

  @Get('/adds/:id')
  getPage(
    @Param('id') id: number
  ) {
    return Add.findOne(id)
  }

  @Post('/adds')
  @HttpCode(201)
  createPage(
    @Body() add: Add
  ) {
    return add.save()
  }

}