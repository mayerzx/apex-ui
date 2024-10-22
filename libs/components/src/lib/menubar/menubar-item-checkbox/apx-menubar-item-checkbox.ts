import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { CdkMenuItemCheckbox } from '@angular/cdk/menu';
import { BooleanInput } from '@angular/cdk/coercion';
import { ApxIcon, provideIcons } from '../../icon';
import { lucideCheck } from '@ng-icons/lucide';

@Component({
  selector: 'apx-menubar-item-checkbox',
  standalone: true,
  hostDirectives: [{ directive: CdkMenuItemCheckbox, outputs: ['cdkMenuItemTriggered: triggered'] }],
  template: `<apx-icon size="sm" name="lucideCheck" />`,
  styleUrl: './apx-menubar-item-checkbox.css',
  host: {
    '[class.checked]': 'checked()',
    '[disabled]': 'disabled()',
    class: 'apx-menubar-item-checkbox',
  },
  imports: [ApxIcon],
  providers: [provideIcons({ lucideCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ApxMenubarItemCheckbox {
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
