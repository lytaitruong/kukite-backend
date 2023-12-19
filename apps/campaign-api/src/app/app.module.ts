import { PrismaCampaignModule } from '@libs/prisma-campaign'
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
    PrismaCampaignModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
