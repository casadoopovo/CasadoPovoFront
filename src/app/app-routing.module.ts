import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AdminGuard} from "./guards/AdminGuard";
import {VereadorPageComponent} from "./components/vereador-page/vereador-page.component";
import {PropositurasPageComponent} from "./components/proposituras-page/proposituras-page.component";
import {PropositurasDetalheComponent} from "./components/proposituras-detalhe/proposituras-detalhe.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {
    path: 'vereador/:nome',
    component: VereadorPageComponent
  },
  {
    path: 'proposituras/:nome',
    component: PropositurasPageComponent
  },
  {
    path: 'proposituras',
    component: PropositurasPageComponent
  },
  {
    path: 'propositurasDetalhe/:id',
    component: PropositurasDetalheComponent
  },
  {
    path: 'admin',
    component: MainPageComponent,
    canActivate:[AdminGuard]
  },
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
