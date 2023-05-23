import { Component } from '@angular/core';

@Component({
  selector: 'shared-home',
  template:
    '<div colour-directive>Shared Component Calling</div><button routerLink="">Back</button>',
})
export class SharedHome {}
