import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { GoogleConnectDto } from './dto/sign-in.dto';
import { Public } from './decorators/public.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('google-connect')
  async googleSignIn(@Body() signInDto: GoogleConnectDto) {
    return this.authService.googleSignIn(signInDto);
  }
}
