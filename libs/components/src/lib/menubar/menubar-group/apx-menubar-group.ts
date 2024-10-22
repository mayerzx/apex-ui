import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'apx-menubar-group',
  standalone: true,
  hostDirectives: [CdkMenuGroup],
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-menubar-group.css',
  host: {
    class: 'apx-menubar-group',
  },
})
export class ApxMenubarGroup {}
