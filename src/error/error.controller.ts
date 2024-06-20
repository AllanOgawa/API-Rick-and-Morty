import { Controller, Get, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ErrorService } from './error.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Error } from './schemas/error.schema';

@Controller('error')
@UseGuards(AuthGuard)
export class ErrorController {
  constructor(private readonly errorService: ErrorService) { }

  @Get()
  async findAll(): Promise<Error[]> {
    try {
      return this.errorService.findAll()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error finding "errors"'
      },
        HttpStatus.FORBIDDEN,
        {
          cause: error
        }
      )
    }
  }
}
