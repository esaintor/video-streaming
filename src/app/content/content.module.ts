import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentComponent } from './content.component';
import { SharedModule } from '../shared';
import { ContentRoutingModule } from './content-routing.module';
import { NoAuthGuard } from '../auth/no-auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ContentRoutingModule
  ],
  declarations: [
    ContentComponent
  ],
  providers: [
    NoAuthGuard
  ]
})
export class ContentModule {}
