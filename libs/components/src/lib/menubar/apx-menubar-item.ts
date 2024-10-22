import { booleanAttribute, Directive, effect, inject, input } from '@angular/core';
import { CdkMenuItem } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[apxMenubarItem]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItem, outputs: ['cdkMenuItemTriggered: triggered'] }],
  host: {
    '[disabled]': 'disabled()',
    class: 'apx-menubar-item',
  },
})
export class ApxMenubarItem {
  private readonly cdkMenuItem = inject(CdkMenuItem, { host: true });

  public disabled = input<boolean, BooleanInput>(this.cdkMenuItem.disabled, { transform: booleanAttribute });

  public constructor() {
    effect(() => {
      this.cdkMenuItem.disabled = this.disabled();
    });
  }
}
