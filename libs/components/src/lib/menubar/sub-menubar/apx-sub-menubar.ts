import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';

@Component({
  selector: 'apx-sub-menubar',
  standalone: true,
  hostDirectives: [CdkMenu],
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-sub-menubar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'apx-sub-menubar',
  },
})
export class ApxSubMenubar {}
