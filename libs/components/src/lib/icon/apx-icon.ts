import { ChangeDetectionStrategy, Component, computed, input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconName, NgIconComponent } from '@ng-icons/core';
import { ApxIconSize } from './apx-icon-size';

@Component({
  selector: 'apx-icon',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './apx-icon.html',
  styleUrl: './apx-icon.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': 'classes()',
  },
})
export class ApxIcon {
  public name = input.required<IconName | string>();
  public size = input<ApxIconSize | string>('base');
  public color = input<string>();
  public strokeWidth = input<string | number>();

  protected classes = computed(() => {
    let size = 'none';
    if (this.isSizeDefined(this.size())) {
      size = this.size();
    }
    return `apx-icon apx-icon-size--${size}`;
  });

  protected iconSize = computed(() => {
    if (this.isSizeDefined(this.size())) return '100%';
    return this.size();
  });

  private isSizeDefined(size: ApxIconSize | string): boolean {
    return ['xs', 'sm', 'base', 'lg', 'xl', 'none'].includes(size);
  }
}
