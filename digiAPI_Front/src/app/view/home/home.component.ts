import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';  
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { DigilistComponent } from './digilist/digilist.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DigimonService } from '../../services/digimon.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DigilistComponent, 
            FormsModule, 
            MatInputModule, 
            MatCardModule, 
            MatToolbarModule, 
            MatIconModule, 
            MatButtonModule, 
            DigilistComponent, 
            RouterModule, 
            CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent implements OnInit{
  digimonNames = [''];
  digimons: any[] = [];
  searchTerm: string = '';


  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private digimonService: DigimonService) {

    /* ícone de lupa, para possível estilização do campo de busca
    this.matIconRegistry.addSvgIconLiteral(
      'custom_search_icon',
      this.domSanitizer.bypassSecurityTrustHtml(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
        </svg>
      `)
    );
    */
  }

  ngOnInit(): void {
    // Inicializar com os 3 digimons padrão
    this.digimonNames = ['Greymon', 'MetalGreymon', 'Agumon'];
  }
  
  
  searchDigimon(): void {
    if (this.searchTerm) {
      this.digimonService.getDigimonByName(this.searchTerm).subscribe(digimon => {
        this.digimonNames = [this.searchTerm]; 
        this.searchTerm = ''; // limpa após chamar a função utilizando a busca do usuário como parametro.
      });
    }
  }
}
