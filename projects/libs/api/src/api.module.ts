import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ApiStateModule } from './lib/state/api/index.module';
// services
import { ApiEndpointsService } from '@api/lib/services/api-endpoints.service';
import { ApiHttpService } from '@api/lib/services/api-http.service';
import { IEnvironment } from '@libs/utils/src/lib/interfaces/environment.interface';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 7 }),
    ApiStateModule,
  ],
  exports: [],
})
export class ApiModule {
  static forRoot(environment: IEnvironment): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        ApiEndpointsService,
        ApiHttpService,
        { provide: 'environment', useValue: environment },
      ],
    };
  }
}
