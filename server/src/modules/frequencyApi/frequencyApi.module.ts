import { Module, DynamicModule } from '@nestjs/common';
import { FrequencyApiService } from './frequencyApi.service';
import createFrequencyApiProviders from './createFrequencyApiProviders';

@Module({
  providers: [
    FrequencyApiService
  ],
  exports: [
    FrequencyApiService
  ]
})
export class FrequencyApiModule { 
  static forRoot(frequencies = [], options?): DynamicModule {
    const providers = createFrequencyApiProviders(frequencies, options);
    return {
      module: FrequencyApiModule,
      providers: providers,
      exports: providers,
    };
  }}