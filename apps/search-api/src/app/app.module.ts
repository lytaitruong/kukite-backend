import { PrismaLiveModule } from '@libs/prisma-live'
import { PrismaVideoModule } from '@libs/prisma-video'
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
    PrismaLiveModule,
    PrismaVideoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
