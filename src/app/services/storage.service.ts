import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class StorageService {
    constructor() {}

    set(key: string, data: any) {
        localStorage.setItem(key, data);
    }

    get(key: string) {
        localStorage.getItem(key);
    }

    clear(key: string) {
        localStorage.removeItem(key);
    }
   
}