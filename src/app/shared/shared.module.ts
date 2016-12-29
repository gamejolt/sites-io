import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetCompilerModule } from '../../lib/gj-lib-client/components/widget-compiler/widget-compiler.module';
import { ThemeInjectorModule } from '../../lib/gj-lib-client/components/theme/injector/injector.module';

const MODULES = [
	CommonModule,
	WidgetCompilerModule,
	ThemeInjectorModule,
];

@NgModule({
	imports: [
		...MODULES,
	],
	exports: [
		...MODULES,
	],
	declarations: [],
	providers: [],
})
export class SharedModule { }
