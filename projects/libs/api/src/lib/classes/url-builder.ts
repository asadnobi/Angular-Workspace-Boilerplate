import { QueryStringParameters } from './query-string-parameters';

export class UrlBuilder {
  public url: string;
  public queryString: QueryStringParameters;

  constructor(private baseUrl: string, private action: string, private queryString_?: QueryStringParameters) {
    this.url = [this.baseUrl, this.action].join('/');
    this.queryString = this.queryString_ || new QueryStringParameters();
  }

  public toString(): string {
    const qs: string = this.queryString ? this.queryString.toString() : '';
    return qs ? `${this.url}?${qs}` : this.url;
  }
}
