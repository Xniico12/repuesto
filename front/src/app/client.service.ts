import { Injectable, } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
// tslint:disable-next-line: typedef
getRequest(route: string, token ?: string){
  const config: any = {
    responseType: 'json'
  };
  if (token){
    const header = new HttpHeaders().set('Authorizaton', `Bearer${token}`);
    config.headers = header;
  }
  console.log(config);
  return this.http.get(route, config);
}
// tslint:disable-next-line: typedef
postRequest(route: string, data?: any, token ?: string){
  const config: any = {
    responseType: 'json'
  };
  if (token){
    const header = new HttpHeaders().set('Authorizaton', `Bearer${token}`);
    config.headers = header;
  }
  console.log(config);
  return this.http.post(route, data, config);
}
// tslint:disable-next-line: typedef
deleteRequest(route: string, token ?: string){
  const config: any = {
    responseType: 'json'
  };
  if (token){
    const header = new HttpHeaders().set('Authorizaton', `Bearer${token}`);
    config.headers = header;
  }
  console.log(config);
  return this.http.delete(route, config);
}
// tslint:disable-next-line: typedef
putRequest(route: string, data?: string , token ?: string){
  const config: any = {
    responseType: 'json'
  };
  if (token){
    const header = new HttpHeaders().set('Authorizaton', `Bearer${token}`);
    config.headers = header;
  }
  console.log(config);
  return this.http.put(route, data, config);
}
}
