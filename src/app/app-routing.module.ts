import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectiontotableComponent } from './collectiontotable/collectiontotable.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'c2t', component: CollectiontotableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
