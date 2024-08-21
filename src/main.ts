import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { LOGGING_PACKAGE_NAME } from '@proto/logging';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../logging.proto'),
        package: LOGGING_PACKAGE_NAME,
      },
    },
  );
  await app.listen();
  console.log(`🚀 Microservice gRPC is listening `);
}

bootstrap();
