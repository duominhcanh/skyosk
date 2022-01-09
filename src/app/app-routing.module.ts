import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './routes/about/about.component';
import { IdleComponent } from './routes/idle/idle.component';
import { MapComponent } from './routes/map/map.component';
import { MenuComponent } from './routes/menu/menu.component';

const routes: Routes = [
  {
    path: "",
    component: IdleComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "map",
    component: MapComponent
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
