import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'home'    , component: HomeComponent         },
  { path: 'buscar'  , component: SearchComponent       },
  { path: 'empresa' , component: BussinessComponent    },
  { path: 'perfil'  , component: ProfileComponent      },
  { path: ''        , component: HomeComponent         },
  { path: '**'      , component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
