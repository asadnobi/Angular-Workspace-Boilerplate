import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as crypto from 'crypto-js'; // Import crypto-js library for encryption

@Injectable()
export class EncryptInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Encrypt the request payload if necessary
    const encryptedRequest = this.encryptRequest(request);

    // Forward the modified request
    return next.handle(encryptedRequest);
  }

  private encryptRequest(request: HttpRequest<any>): HttpRequest<any> {
    // Check if the request payload needs to be encrypted (you can use a header or a certain endpoint pattern)
    if (this.needsEncryption(request.url)) {
      const algorithm = 'aes-256-cbc';
      const key = ''; // Your encryption key
      const iv = ''; // Your initialization vector (IV)

      // Encrypt the request payload
      const encryptedPayload = crypto.AES.encrypt(JSON.stringify(request.body), key, {
        // iv: iv,
        mode: crypto.mode.CBC,
        padding: crypto.pad.Pkcs7
      }).toString();

      // Clone the request and update the body with the encrypted payload
      return request.clone({ body: encryptedPayload });
    }

    return request;
  }

  // Example method to determine if encryption is needed based on the request URL
  private needsEncryption(url: string): boolean {
    // Implement your logic here, for example, based on the URL pattern or headers
    return url.includes('/api/encrypted');
  }
}
