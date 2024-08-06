import { Routes } from '@angular/router';
import { InicioComponent } from './components/views/inicio/inicio.component';
import { MissaoComponent } from './components/views/missao/missao.component';
import { ServicosComponent } from './components/views/servicos/servicos.component';
import { SobreNosComponent } from './components/views/sobre-nos/sobre-nos.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'missao', component: MissaoComponent },
    { path: 'servicos', component: ServicosComponent },
    { path: 'sobre-nos', component: SobreNosComponent }
];
