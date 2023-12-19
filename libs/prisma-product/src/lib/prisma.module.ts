import { Global, Module } from '@nestjs/common'
import { PrismaProductService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaProductService],
  exports: [PrismaProductService],
})
export class PrismaProductModule {}
