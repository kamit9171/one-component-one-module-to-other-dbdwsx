import { MainHome } from './main.component';
import { ColourModule } from '../colour/colour.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
  {
    path: '',
    component: MainHome,
  },
];

@NgModule({
  declarations: [MainHome],
  imports: [ColourModule, RouterModule.forChild(appRoutes)],
})
export class MainModule {}
