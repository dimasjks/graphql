import { NotFoundException } from '@nestjs/common';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user';

@Resolver((of) => User)
export class UsersResolver {
  @Query((returns) => User, { name: 'user' })
  async getUser(
    @Args('id', { type: () => Int }) userId: number,
  ): Promise<User> {
    console.log(userId);
    if (userId > 1) throw new NotFoundException('CANT FIND USER');
    return { id: 1, name: 'Admin' };
  }
}
