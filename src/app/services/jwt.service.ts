import { Injectable } from '@angular/core';
import { KJUR } from 'jsrsasign';
import { AES, HmacSHA256, enc } from 'crypto-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  generateHMAC(data: any): string {
    let hash = HmacSHA256(data, environment.HMAC_KEY);
    let hashInBase64 = enc.Base64.stringify(hash);
    return hashInBase64;
  }

  convertToMD5(data: string): string {
    return KJUR.crypto.Util.hashString(data, 'md5');
  }

  convertToJWT(data: any): string {
    var oHeader = { alg: 'HS256', typ: 'JWT' };
    var sHeader = JSON.stringify(oHeader);
    var sPayload = JSON.stringify(data);
    var sJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, environment.HMAC_KEY);
    return sJWT;
  }

  decodeJWT(token: string): any {
    return KJUR.jws.JWS.parse(token).payloadObj;
  }

  getjwtTimestamp() {
    const date = new Date();
    const currentTimestamp = Math.floor(date.getTime() / 1000);
    const time_stamp = {
      'iss': 'TNB_RPA',
      'ist': 'TNB_RPA',
      'iat': currentTimestamp,
      'exp': currentTimestamp + 15000, // expiry time is 30 seconds from time of creation
    };
    return this.convertToJWT(time_stamp);
  }

  encodeAES(data: any): string {
    return AES.encrypt(JSON.stringify(data), environment.HMAC_KEY).toString();
  }

  decodeAES(data: string): any {
    const decrypted = AES.decrypt(data, environment.HMAC_KEY);
    return JSON.parse(decrypted.toString(enc.Utf8));
  }
}
