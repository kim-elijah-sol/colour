import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtOptionalAccessTokenStrategy extends PassportStrategy(
  Strategy,
  'optionalAccessToken'
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => {
          console.log(request);

          return request?.headers?.access_token;
        },
      ]),
      secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET!,
      ignoreExpiration: true,
      passReqToCallback: true,
    });
  }

  validate() {}
}
