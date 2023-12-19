import { Global, Module } from '@nestjs/common'
import { PrismaOrderService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaOrderService],
  exports: [PrismaOrderService],
})
export class PrismaOrderModule {}
