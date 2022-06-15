import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { UserRepository } from './repository/user.repostory';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: any): Promise<User> {
    const createdUser = await this.userRepository.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne({ email: email });
  }

  async updateOne(userId: string, data: any) {
    return await this.userRepository.findOneAndUpdate({ _id: userId }, data);
  }

  async findById(userId: string): Promise<User | any> {
    return await this.userRepository.findOne({ _id: userId });
  }

  async deleteOne(userId: string) {
    return await this.userRepository.deleteMany({ _id: userId });
  }
}
