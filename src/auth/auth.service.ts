import { Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto, AuthResponse } from './auth.types';

@Injectable()
export class AuthService {
  async login(loginDto: LoginDto): Promise<AuthResponse> {
    console.log('??');
    // TODO: 실제 로그인 로직 구현
    return {
      message: '로그인 성공',
      user: {
        email: loginDto.email,
      },
    };
  }

  async register(registerDto: RegisterDto): Promise<AuthResponse> {
    // TODO: 실제 회원가입 로직 구현
    return {
      message: '회원가입 성공',
      user: {
        email: registerDto.email,
        name: registerDto.name,
      },
    };
  }
}
