import { NgModule } from '@angular/core';
import { ThemeVashComponent } from './vash/vash.component';
import { ThemeReduxComponent } from './redux/redux.component';
import { SharedModule } from '../shared/shared.module';

const THEMES: any[] = [
	ThemeVashComponent,
	ThemeReduxComponent,
];

@NgModule({
	imports: [
		SharedModule,
	],
	exports: [
		...THEMES,
	],
	declarations: [
		...THEMES,
	],
	providers: [],
})
export class ThemesModule { }
