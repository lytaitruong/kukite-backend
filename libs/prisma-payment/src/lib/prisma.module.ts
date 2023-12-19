import { Global, Module } from '@nestjs/common'
import { PrismaPaymentService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaPaymentService],
  exports: [PrismaPaymentService],
})
export class PrismaPaymentModule {}
