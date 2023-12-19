import { PrismaOrderModule } from '@libs/prisma-order'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: ['.env'],
      load: [],
    }),
    PrismaOrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
