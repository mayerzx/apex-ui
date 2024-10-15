import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';
import { ApxElementSize } from '../core';
import { ApxVariantMap } from '../core/apx-variant-map';

const variantMap: ApxVariantMap[] = [
  {
    attribute: 'apx-button',
    apxClasses: ['apx-button', 'apx-button--primary'],
  },
  {
    attribute: 'apx-secondary-button',
    apxClasses: ['apx-button', 'apx-button--secondary'],
  },
  {
    attribute: 'apx-outline-button',
    apxClasses: ['apx-button', 'apx-button--outline'],
  },
  {
    attribute: 'apx-ghost-button',
    apxClasses: ['apx-button', 'apx-button--ghost'],
  },
  {
    attribute: 'apx-link-button',
    apxClasses: ['apx-button', 'apx-button--link'],
  },
];

@Component({
  selector:
    'button[apx-button], button[apx-secondary-button], button[apx-outline-button], button[apx-ghost-button], button[apx-link-button]',
  standalone: true,
  exportAs: 'apxButton',
  templateUrl: './apx-button.html',
  styleUrl: './apx-button.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
  },
})
export class ApxButtonComponent {
  private readonly _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);
  protected classes = computed(() => `apx-button-size--${this.size()}`);

  public size = input<ApxElementSize>('default');

  public constructor() {
    const element = this._elementRef.nativeElement;
    for (const variant of variantMap) {
      if (element.hasAttribute(variant.attribute)) {
        element.classList.add(...variant.apxClasses);
      }
    }
  }
}
