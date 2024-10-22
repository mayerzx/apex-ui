import { booleanAttribute, Directive, effect, inject, input } from '@angular/core';
import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[apxMenuItemCheckbox]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItemCheckbox, outputs: ['cdkMenuItemTriggered: triggered'] }],
  host: {
    '[class.checked]': 'checked()',
    '[disabled]': 'disabled()',
    class: 'apx-menu-item-checkbox',
  },
})
export class ApxMenuItemCheckbox {
  private readonly cdkMenuItemCheckbox = inject(CdkMenuItemCheckbox, { host: true });

  public disabled = input<boolean, BooleanInput>(this.cdkMenuItemCheckbox.disabled, { transform: booleanAttribute });
  public checked = input<boolean, BooleanInput>(this.cdkMenuItemCheckbox.checked, { transform: booleanAttribute });

  public constructor() {
    effect(() => {
      this.cdkMenuItemCheckbox.disabled = this.disabled();
    });

    effect(() => {
      this.cdkMenuItemCheckbox.checked = this.checked();
    });
  }
}
