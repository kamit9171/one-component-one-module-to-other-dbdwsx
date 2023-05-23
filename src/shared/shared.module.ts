import { SharedHome } from './shared.component';
import { ColourModule } from '../colour/colour.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const appRoutes = [
  {
    path: '',
    component: SharedHome,
  },
];

@NgModule({
  declarations: [SharedHome],
  entryComponents: [SharedHome],
  imports: [ColourModule, RouterModule.forChild(appRoutes)],
})
export class SharedModule {}
