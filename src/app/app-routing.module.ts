import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
