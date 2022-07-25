import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioCeldasService {

  constructor(public cliente:HttpClient) {
    console.log("consumiendo el servicio")
   }
   buscarCelda():Observable<any>{
    return this.cliente.get("https://serverparq.herokuapp.com/api/v1/parqueadero/celdas/")
   }

}
