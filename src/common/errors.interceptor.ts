import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException, Logger, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from 'src/error/error.service';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    private readonly logger = new Logger(ErrorsInterceptor.name)

    constructor(private readonly errorService: ErrorService) { }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next
            .handle()
            .pipe(
                catchError(async (err) => {
                    const request = context.switchToHttp().getRequest()
                    const { method, url } = request

                    await this.errorService.create(err.message, err.stack, `${method} ${url}`);

                    throw new HttpException({
                        status: err.status,
                        error: err.response.error
                    },
                        HttpStatus.FORBIDDEN,
                        {
                            cause: err.response.cause
                        }
                    )
                }),
            );
    }
}