import { booleanAttribute, Directive, effect, inject, input } from '@angular/core';
import { CdkMenuItemRadio } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';

@Directive({
  selector: '[apxMenuItemRadio]',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItemRadio, outputs: ['cdkMenuItemTriggered: triggered'] }],
  host: {
    '[class.checked]': 'checked()',
    '[disabled]': 'disabled()',
    class: 'apx-menu-item-radio',
  },
})
export class ApxMenuItemRadio {
  private readonly cdkMenuItemRadio = inject(CdkMenuItemRadio, { host: true });

  public disabled = input<boolean, BooleanInput>(this.cdkMenuItemRadio.disabled, { transform: booleanAttribute });
  public checked = input<boolean, BooleanInput>(this.cdkMenuItemRadio.checked, { transform: booleanAttribute });

  public constructor() {
    effect(() => {
      this.cdkMenuItemRadio.disabled = this.disabled();
    });

    effect(() => {
      this.cdkMenuItemRadio.checked = this.checked();
    });
  }
}
