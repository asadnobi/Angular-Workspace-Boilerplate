import { AfterViewInit, Component } from '@angular/core';
import { ApiEndpointsService } from '@libs/api/src/lib/services/api-endpoints.service';
import { apiRequest } from '@libs/api/src/lib/state/api/api.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'web';

  constructor(
    private store: Store,
    private apiEndpointsService: ApiEndpointsService,
  ) {}
  ngAfterViewInit(): void {
    const url = this.apiEndpointsService.createUrl('hospitals');
    this.store.dispatch(apiRequest({ url, method: 'GET' }));
  }
}
