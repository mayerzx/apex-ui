import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenuItemRadio } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';
import { ApxIcon, provideIcons } from '../../icon';
import { lucideCircle } from '@ng-icons/lucide';

@Component({
  selector: 'apx-menubar-item-radio',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItemRadio, outputs: ['cdkMenuItemTriggered: triggered'] }],
  template: ` <apx-icon size="xs" name="lucideCircle" />`,
  styleUrl: 'apx-menubar-item-radio.css',
  host: {
    '[class.checked]': 'checked()',
    '[disabled]': 'disabled()',
    class: 'apx-menubar-item-radio',
  },
  imports: [ApxIcon],
  providers: [provideIcons({ lucideCircle })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenubarItemRadio {
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
