import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  endPoint = "http://localhost:8080/api/instruments";

  constructor(private httpClient: HttpClient) { }

  getInstruments(){
    return this.httpClient.get(this.endPoint);
  }

  createInstrument(instrument, blob){
    let formData = new FormData();
    formData.append("brand", instrument.brand);
    formData.append("model", instrument.model);
    formData.append("file", blob);

    return this.httpClient.post(this.endPoint, formData);
  }
}
