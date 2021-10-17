import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../inicio/inicio.module').then((m) => m.InicioPageModule),
      },
      {
        path: 'chat-a',
        loadChildren: () =>
          import('../chat-a/chat-a.module').then((m) => m.ChatAPageModule),
      },
      {
        path: 'chat-b',
        loadChildren: () =>
          import('../chat-b/chat-b.module').then((m) => m.ChatBPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
