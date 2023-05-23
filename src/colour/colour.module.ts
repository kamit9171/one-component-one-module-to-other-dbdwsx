import { ColourDirective } from './colour.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ColourDirective],
  exports: [ColourDirective],
})
export class ColourModule {}
