import { Global, Module } from '@nestjs/common'
import { PrismaVideoService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaVideoService],
  exports: [PrismaVideoService],
})
export class PrismaVideoModule {}
