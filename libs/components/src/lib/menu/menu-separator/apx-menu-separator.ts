import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-menu-separator',
  standalone: true,
  template: '',
  styleUrl: './apx-menu-separator.css',
  host: {
    class: 'apx-menu-separator',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenuSeparator {}
