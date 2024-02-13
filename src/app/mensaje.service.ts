import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  mensaje() {
    console.log("Mas adelante se vienen cositas")
  }
}
