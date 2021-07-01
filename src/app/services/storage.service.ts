import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor() {}

    set(key: string, data: any) {
       return localStorage.setItem(key, data);
    }

    get(key: string) {
       return localStorage.getItem(key);
    }

    clear(key: string) {
       return localStorage.removeItem(key);
    }
   
}