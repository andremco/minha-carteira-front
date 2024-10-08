import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {SalvarSetor} from "../models/setor/SalvarSetor";
import {Setor} from "../models/setor/Setor";
import {Observable} from "rxjs";
import {EditarSetor} from "../models/setor/EditarSetor";

@Injectable({
  providedIn: 'root'
})
export class SetorService{
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log(this.apiUrl)
  }

  salvar(request : SalvarSetor) : Observable<Setor>{
    return this.http.post<Setor>(this.apiUrl + '/setor', request);
  }

  editar(request : EditarSetor) : Observable<Setor>{
    return this.http.put<Setor>(this.apiUrl + '/setor', request);
  }

}
