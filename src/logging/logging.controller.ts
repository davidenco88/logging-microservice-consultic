import { Controller } from '@nestjs/common';
import { LoggingService } from './logging.service';
import {
  CreateLoggingDto,
  LoggingServiceController,
  LoggingServiceControllerMethods,
} from '@proto/logging';

@Controller()
@LoggingServiceControllerMethods()
export class LoggingController implements LoggingServiceController {
  constructor(private readonly loggingService: LoggingService) {}

  pin() {
    return this.loggingService.pin();
  }

  createLogging(createLoggingDto: CreateLoggingDto) {
    return this.loggingService.createLogging(createLoggingDto);
  }
}
