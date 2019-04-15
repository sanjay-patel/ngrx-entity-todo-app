import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'; 


@Injectable({ providedIn: 'root' })
export class ConfigService {
       
    
    constructor (public http: Http, private router: Router) {
        console.log('ConfigService called');
    }

    public getApiEndPoint() {
        return 'https://google.com';
    }
}
