import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {AdminGuard} from "./guards/AdminGuard";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {
    path: 'vereador:nome',

  },
  {
    path: 'sessoes',

  },
  {
    path: 'admin',

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
