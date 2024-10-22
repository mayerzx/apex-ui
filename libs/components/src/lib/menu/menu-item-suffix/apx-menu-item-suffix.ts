import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-menu-item-suffix',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-menu-item-suffix.css',
  host: {
    class: 'apx-menu-item-suffix',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenuItemSuffix {}
