import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs/Rx';
import { ConfigService } from './config.service';

declare let toastr: any;

@Injectable()
export class ApiService {

    public nativeEl: any;
    constructor (private http: Http, public _configService: ConfigService, private router: Router) {
    }
    
    request(method, url, data, param = {}) {

        let endPoint = this._configService.getApiEndPoint();
        let apiURL = endPoint + url;

        let headers = new Headers({'Content-type': 'application/json' });
        headers.append('Access-Control-Allow-Origin','*');
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);

        let request;
        if (method === 'post') {
            request = this.http.post(apiURL, body, options)
                .map((res) => {
                     return this.extractData(res);
                })
                .catch((error: any) => { return this.handleError(error); });
        } else if (method === 'get') {
            try {
                request = this.http.get(apiURL, options)
                    .map((res) => { return this.extractData(res); })
                    .catch((error: any) => { return this.handleError(error); });

            } catch (e) {
                console.log('exception caught in get method...', e);
            }
        } else if (method === 'delete') {
            request = this.http.delete(apiURL, options)
                .map((res) => { return this.extractData(res); })
                .catch((error: any) => { return this.handleError(error); });
        } else if (method === 'put') {
            request = this.http.put(apiURL, body, options)
                .map((res) => { return this.extractData(res); })
                .catch((error: any) => { return this.handleError(error); });
        }

        return request;
    }
    private extractData(res) {
        if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response status: ' + res.status);
        }
        let response = res._body.replace(/\)]}'/g, '');
        let data = JSON.parse(response);
        return data || {};

    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error'; 
        return Observable.throw(errMsg);
    }
}
