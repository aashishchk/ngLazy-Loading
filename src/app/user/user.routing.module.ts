import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from '../_services/user-list.service';
import { NewUserComponent } from './user-list/new-user/new-user.component';



const routes: Routes = [
  { path: '', component: UserListComponent },
];

@NgModule({
  declarations: [UserListComponent, NewUserComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserListService]
})
export class UserRoutingModule { }
