import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-menubar-separator',
  standalone: true,
  template: '',
  styleUrl: './apx-menubar-separator.css',
  host: {
    class: 'apx-menubar-separator',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenubarSeparator {}
