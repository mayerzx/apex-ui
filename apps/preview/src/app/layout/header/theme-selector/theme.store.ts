import { Theme } from './theme';
import { signalStore, withMethods, withState } from '@ngrx/signals';
import { updateState, withDevtools } from '@angular-architects/ngrx-toolkit';

type ThemeState = {
  theme: Theme;
};

const initialState: ThemeState = {
  theme: 'system',
};

export const ThemeStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withDevtools('themeState'),
  withMethods((store) => ({
    updateTheme(theme: Theme): void {
      localStorage.setItem('theme', theme);
      updateState(store, '[Theme] update', {});
    },
  }))
);
