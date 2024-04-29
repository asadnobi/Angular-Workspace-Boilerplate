import { Inject, Injectable } from '@angular/core';
import { QueryStringParameters } from '@api/lib/classes/query-string-parameters';
import { UrlBuilder } from '@api/lib/classes/url-builder';
import { IEnvironment } from '@libs/utils/src/lib/interfaces/environment.interface';

@Injectable()
export class ApiEndpointsService {
  private apiEndpoint: string;

  constructor(@Inject('environment') private environment: IEnvironment) {
    this.apiEndpoint = this.environment.apiEndpoint;
  }

  // URL
  public createUrl(action: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.apiEndpoint, action);
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  public createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void,
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(this.apiEndpoint, action);
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  // URL WITH PATH VARIABLES
  public createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = [],
  ): string {
    let encodedPathVariablesUrl = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(pathVariable.toString())}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.apiEndpoint,
      `${action}${encodedPathVariablesUrl}`,
    );
    return urlBuilder.toString();
  }
}
