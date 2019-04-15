import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'add',
        loadChildren: './component/add/add.module#AddModule'
    },
    {
        path: 'edit/:id',
        loadChildren: './component/edit/edit.module#EditModule'
    },
    {
        path: 'list',
        loadChildren: './component/list/list.module#ListModule'
    },
    {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
