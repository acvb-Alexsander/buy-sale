import { Routes } from '@angular/router';
import { PageListComponent } from './page-list/page-list.component';
import { DetailsListComponent } from './details-list/details-list.component';
import { ContatePageComponent } from './contate-page/contate-page.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { MyListComponent } from './my-list/my-list.component';
import { NewListComponent } from './new-list/new-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/page-list', pathMatch: 'full' },
  { path: 'page-list', component: PageListComponent, pathMatch: 'full' },
  { path: 'page-list/:id', component: DetailsListComponent },
  { path: 'contate-page/:id', component: ContatePageComponent },
  { path: 'edit-list/:id', component: EditListComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'new-list', component: NewListComponent },
];
