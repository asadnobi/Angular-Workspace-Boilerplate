export interface IEnvironment {
  production: boolean;
  basePath: string;
  apiEndpoint: string;
  socketEndpoint?: string;
  google?: IGoogleApi;
  facebook?: IFacebookApi;
  googleMap?: IGoogleMapApi;
  appInfo?: IAppInfo;
}

export interface IAppInfo {
  version: string;
  last_update: string;
}
export interface IGoogleApi {
  apiKey: string;
  version: string;
}
export interface IFacebookApi {
  apiKey: string;
  version: string;
}
export interface IGoogleMapApi {
  apiKey: string;
  version: string;
}