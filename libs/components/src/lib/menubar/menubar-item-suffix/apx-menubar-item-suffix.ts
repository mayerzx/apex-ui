import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'apx-menubar-item-suffix',
  standalone: true,
  template: `<ng-content></ng-content>`,
  styleUrl: './apx-menubar-item-suffix.css',
  host: {
    class: 'apx-menubar-item-suffix',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenubarItemSuffix {}
