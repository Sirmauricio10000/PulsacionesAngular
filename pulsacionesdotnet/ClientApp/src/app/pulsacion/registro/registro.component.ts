import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona:Persona;
  constructor(private personaService:PersonaService) {}

  ngOnInit() {
    this.persona = new Persona;
  }

  add(){
    alert ("Se creó la persona "+JSON.stringify(this.persona));
    this.personaService.post(this.persona);
  }

  calcular(){
    if (this.persona.sexo == "M"){
      this.persona.pulsacion = (210 - this.persona.edad)/10;
    } 
    else{
      this.persona.pulsacion = (220 - this.persona.edad)/10;
    }
    
  }
}
