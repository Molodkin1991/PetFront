import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/pet')
  }

  //getOne(id):Observable<IPet[]>{
  //return this.http.get<IPet>('localhost:8080/api/pet/id')}

  create(pet: any): Observable<any> {
    return this.http.post<any>('//localhost:8080/api/pet/create-new/', pet)

  }

  edit(pet: any): Observable<any> {
    return this.http.put<any>('//localhost:8080/api/pet/create-new/', pet)

  }
}
