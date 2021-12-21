import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductScreenComponent } from './components/product-screen/product-screen.component';

import { ProdutosComponent } from './components/produtos/produtos.component';


const routes: Routes = [{
  path: "app-produtos",
  component: ProdutosComponent
},
{
  path: "",
  component: HomeComponent
},{
   path:"app-product-screen",
   component: ProductScreenComponent
}
,{
  path:"app-login",
  component: LoginComponent
},{
  path:"app-cadastro",
  component: CadastroComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
