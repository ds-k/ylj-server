import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { IAuthRepository } from './interfaces/auth.repository.interface';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: IAuthRepository) {}

  async login(loginDto: LoginDto) {
    const user = await this.authRepository.findByEmail(loginDto.email);

    if (!user) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 일치하지 않습니다',
      );
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException(
        '이메일 또는 비밀번호가 일치하지 않습니다',
      );
    }

    return {
      message: '로그인 성공',
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }

  async register(registerDto: RegisterDto) {
    const existingUser = await this.authRepository.findByEmail(
      registerDto.email,
    );
    if (existingUser) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다');
    }

    const user = await this.authRepository.createUser(registerDto);

    return {
      message: '회원가입 성공',
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }
}
