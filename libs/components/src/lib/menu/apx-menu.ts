import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CdkMenu } from '@angular/cdk/menu';

@Component({
  selector: 'apx-menu',
  standalone: true,
  hostDirectives: [CdkMenu],
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'apx-menu',
  },
})
export class ApxMenu {}
