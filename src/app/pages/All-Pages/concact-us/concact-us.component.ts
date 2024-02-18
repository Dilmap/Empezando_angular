import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-concact-us',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './concact-us.component.html',
  styleUrl: './concact-us.component.css'
})
export class ConcactUsComponent {
  title: string='contact@technologycal.com';

  formulario= new FormGroup({
    name:  new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    company: new FormControl('', [Validators.nullValidator]),
    subject: new FormControl('', [Validators.nullValidator]),
    message: new FormControl('', [Validators.required]),
  });


  envio(){
    console.log(this.formulario.value);
  }
}


