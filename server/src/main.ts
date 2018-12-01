import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as helmet from 'helmet';
import * as morgan from 'morgan';
import { morganLogger } from './modules/common/';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  // non-nest middleware
  app
    .use(helmet())
    .use(morgan(morganLogger.format, morganLogger.stderrOpts))
    .use(morgan(morganLogger.format, morganLogger.stdoutOpts))

  await app.listen(5000);
}
bootstrap();
