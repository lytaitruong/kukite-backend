import { Global, Module } from '@nestjs/common'
import { PrismaBusinessService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaBusinessService],
  exports: [PrismaBusinessService],
})
export class PrismaBusinessModule {}
