import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../models/IUser";

@Injectable({
    providedIn: 'root'
})

export class DataService {
    constructor(private http: HttpClient) {}

    userData(): Observable<IUser[]> {
       return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }
}