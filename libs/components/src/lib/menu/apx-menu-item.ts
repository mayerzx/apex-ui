import { booleanAttribute, Directive, effect, inject, input } from '@angular/core';
import { CdkMenuItem } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[apxMenuItem]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItem, outputs: ['cdkMenuItemTriggered: triggered'] }],
  host: {
    class: 'apx-menu-item',
    '[disabled]': 'disabled()',
  },
})
export class ApxMenuItem {
  private readonly cdkMenuItem = inject(CdkMenuItem, { host: true });

  public disabled = input<boolean, BooleanInput>(this.cdkMenuItem.disabled, { transform: booleanAttribute });

  public constructor() {
    effect(() => {
      this.cdkMenuItem.disabled = this.disabled();
    });
  }
}
