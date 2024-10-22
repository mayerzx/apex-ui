import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'apx-menu-shortcut',
  standalone: true,
  template: ` <ng-content /> `,
  styleUrl: './apx-menu-shortcut.css',
  host: {
    class: 'apx-menu-shortcut',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenuShortcut {}
