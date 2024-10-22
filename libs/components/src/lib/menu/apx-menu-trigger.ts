import { Directive, effect, inject, input } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { ApxCtxMenuAlign } from './apx-menu-align';

@Directive({
  selector: '[apxMenuTriggerFor]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuTrigger, inputs: ['cdkMenuTriggerFor: apxMenuTriggerFor'] }],
})
export class ApxMenuTrigger {
  private readonly cdkMenuTrigger = inject(CdkMenuTrigger, { host: true });

  public align = input<ApxCtxMenuAlign>();

  public constructor() {
    effect(() => {
      const align = this.align();
      if (!align) return;
      this.cdkMenuTrigger.menuPosition = [
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
