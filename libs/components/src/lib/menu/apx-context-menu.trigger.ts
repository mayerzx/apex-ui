import { Directive, effect, inject, input } from '@angular/core';
import { CdkContextMenuTrigger } from '@angular/cdk/menu';
import { ApxCtxMenuAlign } from './apx-menu-align';

@Directive({
  selector: '[apxCtxMenuTriggerFor]',
  standalone: true,
  hostDirectives: [
    {
      directive: CdkContextMenuTrigger,
      inputs: ['cdkContextMenuTriggerFor: apxCtxMenuTriggerFor', 'cdkContextMenuTriggerData: apxCtxMenuTriggerData'],
    },
  ],
})
export class ApxCtxMenuTriggerFor {
  private readonly cdkContextMenuTrigger = inject(CdkContextMenuTrigger, { host: true });

  public align = input<ApxCtxMenuAlign>();

  public constructor() {
    effect(() => {
      const align = this.align();
      if (!align) return;
      this.cdkContextMenuTrigger.menuPosition = [
        {
          originX: align,
          originY: 'bottom',
          overlayX: align,
          overlayY: 'top',
        },
        {
          originX: align,
          originY: 'top',
          overlayX: align,
          overlayY: 'bottom',
        },
      ];
    });
  }
}
