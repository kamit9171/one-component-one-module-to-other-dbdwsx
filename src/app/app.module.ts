import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ColourModule } from '../colour/colour.module';

const appRoutes: Route[] = [
  {
    path: 'shared',
    loadChildren: '../shared/shared.module#SharedModule',
  },
  { path: 'main', loadChildren: '../main/main.module#MainModule' },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ColourModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
