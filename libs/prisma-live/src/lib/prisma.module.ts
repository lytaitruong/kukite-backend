import { Global, Module } from '@nestjs/common'
import { PrismaLiveService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaLiveService],
  exports: [PrismaLiveService],
})
export class PrismaLiveModule {}
