import { Routes } from '@angular/router';
import { BussinessComponent } from './app/bussiness/bussiness.component';
import { HomeComponent } from './app/home/home.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';
import { ProfileComponent } from './app/profile/profile.component';
import { SearchComponent } from './app/search/search.component';

export const routes: Routes = [
  { path: 'home'    , component: HomeComponent                                                  },
  { path: 'buscar'  , component: SearchComponent                                                },
  { path: 'empresa' , component: BussinessComponent                                             },
  { path: 'perfil'  , component: ProfileComponent                                               },
  { path: ''        , component: HomeComponent        /*  , redirectTo: '/home', pathMatch: 'full' */ },
  { path: '**'      , component: PageNotFoundComponent                                          },
];