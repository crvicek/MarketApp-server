import { JsonController, Get, Param, Post, HttpCode, Body, NotFoundError, Put, Delete, OnUndefined } from 'routing-controllers'
import Ad from './entity'
// import User from '../users/entity';

@JsonController()
export default class AdController {

  @Get('/ads')
  getAll() {
    const ads = Ad.find()
    return ads
  }

  @Get('/ads/:id')
  getOne(
    @Param('id') id: number
  ) {
    return Ad.findOne(id)
  }

  // @Authorized()
  @Post('/ads')
  @HttpCode(201)
  createAd(
    // @CurrentUser({ required: true }) user: User,
    @Body() ad: Ad
  ) {
    const { userId, ...rest } = ad
    const entity = Ad.create(rest)
    // entity.userId = user
    return entity.save()
  }

  // @Authorized()
  @Put('/ads/:id')
  async updateAd(
    @Param('id') id: number,
    @Body() update: Partial<Ad>
  ) {
    const ad = await Ad.findOne(id)
    if (!ad) throw new NotFoundError('Cannot find Ad')
    return Ad.merge(ad, update).save()
  }

  // @Authorized()
  @Delete('/ads/:id')
  @OnUndefined(204)
  deleteAd(
    @Param('id') id: number,
  ) {
    return Ad.delete(id)
  }
}