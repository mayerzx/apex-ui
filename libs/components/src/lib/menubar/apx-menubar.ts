import { CdkMenuBar } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'apx-menubar',
  standalone: true,
  hostDirectives: [CdkMenuBar],
  styleUrl: './apx-menubar.css',
  host: {
    class: 'apx-menubar',
  },
  template: `<ng-content></ng-content>`,
})
export class ApxMenuBar {}
