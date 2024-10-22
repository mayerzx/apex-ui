import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'apx-menu-shortcut',
  standalone: true,
  template: ` <ng-content /> `,
  styleUrl: './apx-menubar-shortcut.css',
  host: {
    class: 'apx-menubar-shortcut',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenubarShortcut {}
