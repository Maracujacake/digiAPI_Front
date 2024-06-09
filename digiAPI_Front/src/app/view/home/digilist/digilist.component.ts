import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from '@angular/material/card'; 
import { DigimonService } from '../../../services/digimon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digilist',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './digilist.component.html',
  styleUrl: './digilist.component.css'
})


export class DigilistComponent implements  OnChanges {
  @Input() digimonNames: string[] = [];
  digimons: any[] = [];

  constructor(private digimonService: DigimonService) { }

  /* causa duplicação dos cards na tela inicial
  ngOnInit(): void {
    this.loadDigimons();
  }
  */

  // evento de mudança, mostra os cards baseado na pesquisa do usuario
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['digimonNames']) {
      this.loadDigimons();
    }
  }

  loadDigimons(): void {
    this.digimons = [];
    this.digimonNames.forEach(name => {
      this.fetchDigimon(name);
    });
  }

  fetchDigimon(name: string): void {
    this.digimonService.getDigimonByName(name).subscribe(
      (data) => {
        this.digimons.push(data[0]);  // A API retorna um array, pegue o primeiro elemento
      },
      (error) => {
        console.error('Erro ao buscar o Digimon:', error);
      }
    );
  }
}
