import { Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { DigilistComponent } from './view/home/digilist/digilist.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// rotas para home e requisição para componente de card
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'digimon/name/:name',
        component: DigilistComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}