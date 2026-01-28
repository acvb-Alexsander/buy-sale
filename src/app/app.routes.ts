import { Routes } from '@angular/router';
import { PageListComponent } from './modules/page-list/page-list.component';
import { DetailsListComponent } from './modules/details-list/details-list.component';
import { ContatePageComponent } from './modules/contate-page/contate-page.component';
import { EditListComponent } from './modules/edit-list/edit-list.component';
import { MyListComponent } from './modules/my-list/my-list.component';
import { NewListComponent } from './modules/new-list/new-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/page-list', pathMatch: 'full' },
  { path: 'page-list', component: PageListComponent, pathMatch: 'full' },
  { path: 'page-list/:id', component: DetailsListComponent },
  { path: 'contate-page/:id', component: ContatePageComponent },
  { path: 'edit-list/:id', component: EditListComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'new-list', component: NewListComponent },
];
