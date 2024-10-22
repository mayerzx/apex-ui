import { Directive, effect, inject, input } from '@angular/core';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { ApxCtxMenubarAlign } from './apx-menubar-align';

@Directive({
  selector: '[apxMenubarTriggerFor]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuTrigger, inputs: ['cdkMenuTriggerFor: apxMenubarTriggerFor'] }],
})
export class ApxMenubarTrigger {
  private readonly cdkMenuTrigger = inject(CdkMenuTrigger, { host: true });

  public align = input<ApxCtxMenubarAlign>();

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
