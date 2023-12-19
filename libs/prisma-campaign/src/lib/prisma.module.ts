import { Global, Module } from '@nestjs/common'
import { PrismaCampaignService } from './prisma.service'

@Global()
@Module({
  providers: [PrismaCampaignService],
  exports: [PrismaCampaignService],
})
export class PrismaCampaignModule {}
