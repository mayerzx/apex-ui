import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';

@Component({
  selector: 'apx-sub-menu',
  standalone: true,
  hostDirectives: [CdkMenu],
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-sub-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'apx-sub-menu',
  },
})
export class ApxSubMenu {}
