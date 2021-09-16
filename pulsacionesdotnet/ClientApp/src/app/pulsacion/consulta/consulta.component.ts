import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';


@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  personas:Persona[];
  searchText:string;

  constructor(private personaService:PersonaService) { }

  ngOnInit() {
    this.personas = this.personaService.get();
  }

}
