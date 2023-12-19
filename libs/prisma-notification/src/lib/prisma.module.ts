import { Global, Module } from '@nestjs/common'
import { PrismaNotificationService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaNotificationService],
  exports: [PrismaNotificationService],
})
export class PrismaNotificationModule {}
