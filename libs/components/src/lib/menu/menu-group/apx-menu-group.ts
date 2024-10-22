import { CdkMenuGroup } from '@angular/cdk/menu';
import { Component } from '@angular/core';

@Component({
  selector: 'apx-menu-group',
  standalone: true,
  hostDirectives: [CdkMenuGroup],
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-menu-group.css',
  host: {
    class: 'apx-menu-group',
  },
})
export class ApxMenuGroup {}
