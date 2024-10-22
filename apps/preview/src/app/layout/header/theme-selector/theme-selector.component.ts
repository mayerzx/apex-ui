import { ChangeDetectionStrategy, Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ApxButtonComponent,
  ApxIcon,
  ApxMenu,
  ApxMenuItem,
  ApxMenuItemCheckbox,
  ApxMenuTrigger,
  provideIcons,
} from '@apex-ui/components';
import { lucideMoon, lucideSun } from '@ng-icons/lucide';
import { ThemeStore } from './theme.store';
import { Theme } from './theme';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [CommonModule, ApxButtonComponent, ApxIcon, ApxMenuTrigger, ApxMenu, ApxMenuItemCheckbox, ApxMenuItem],
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.css',
  providers: [provideIcons({ lucideMoon, lucideSun })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-theme-selector',
  },
})
export class ThemeSelectorComponent {
  private themeStore = inject(ThemeStore);

  public theme = computed<Theme>(() => {
    return this.themeStore.theme();
  });

  public isLight = computed(() => {
    return this.theme() === 'light';
  });

  public isDark = computed(() => {
    return this.theme() === 'dark';
  });

  public isSystem = computed(() => {
    return this.theme() === 'system';
  });

  public constructor() {
    const theme = localStorage.getItem('theme') ?? 'system';
    this.themeStore.updateTheme(theme as Theme);
  }

  public updateTheme(theme: Theme): void {
    this.themeStore.updateTheme(theme as Theme);
  }
}
