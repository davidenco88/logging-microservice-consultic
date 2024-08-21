import { Injectable } from '@nestjs/common';
import { CreateLoggingDto } from '@proto/logging';

@Injectable()
export class LoggingService {
  createLogging(createLoggingDto: CreateLoggingDto) {
    return createLoggingDto;
  }

  pin() {
    return { parameter: 'Este es un pin de prueba para la API gRPC' };
  }
}
