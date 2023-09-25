import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataComponent } from './data/data.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent  },
  { path: 'data', component: DataComponent  },
  { path: 'service', component: ServiceComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
