import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppModule as LibAppModule } from '../lib/gj-lib-client/components/app/app.module';
import { EnvironmentModule } from '../lib/gj-lib-client/components/environment/environment.module';
import { ApiModule } from '../lib/gj-lib-client/components/api/api.module';
import { UserModule } from '../lib/gj-lib-client/components/user/user.module';
import { MetaModule } from '../lib/gj-lib-client/components/meta/meta.module';
import { MediaItemModule } from '../lib/gj-lib-client/components/media-item/media-item.module';
import { GameScreenshotModule } from '../lib/gj-lib-client/components/game/screenshot/screenshot.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { GameVideoModule } from '../lib/gj-lib-client/components/game/video/video.module';
import { GameModule } from '../lib/gj-lib-client/components/game/game.module';
import { SellableModule } from '../lib/gj-lib-client/components/sellable/sellable.module';
import { SellablePricingModule } from '../lib/gj-lib-client/components/sellable/pricing/pricing.module';
import { GameReleaseModule } from '../lib/gj-lib-client/components/game/release/release.module';
import { GameBuildModule } from '../lib/gj-lib-client/components/game/build/build.module';
import { GameBuildFileModule } from '../lib/gj-lib-client/components/game/build/file/file.module';
import { GameBuildParamModule } from '../lib/gj-lib-client/components/game/build/param/param.module';
import { GameBuildLaunchOptionModule } from '../lib/gj-lib-client/components/game/build/launch-option/launch-option.module';
import { GamePackageModule } from '../lib/gj-lib-client/components/game/package/package.module';
import { ModelModule } from '../lib/gj-lib-client/components/model/model.module';
import { ThemesModule } from './themes/themes.module';
import { WidgetCompilerModule } from '../lib/gj-lib-client/components/widget-compiler/widget-compiler.module';
import { SiteModule } from '../lib/gj-lib-client/components/site/site.module';
import { SiteThemeModule } from '../lib/gj-lib-client/components/site/theme/theme.module';
import { SiteThemeDefinitionModule } from '../lib/gj-lib-client/components/site/theme-definition/theme-definition.module';
import { SiteContentBlockModule } from '../lib/gj-lib-client/components/site/content-block/content-block.module';

@NgModule( {
	imports: [
		BrowserModule,
		// FormsModule,
		HttpModule,
		CoreModule,
		SharedModule,
		LibAppModule,
		EnvironmentModule,
		MetaModule,
		ApiModule,
		ModelModule,
		SiteModule,
		SiteThemeModule,
		SiteThemeDefinitionModule,
		SiteContentBlockModule,
		UserModule,
		GameModule,
		SellableModule,
		SellablePricingModule,
		GameScreenshotModule,
		GameVideoModule,
		MediaItemModule,
		GamePackageModule,
		GameReleaseModule,
		GameBuildModule,
		GameBuildFileModule,
		GameBuildParamModule,
		GameBuildLaunchOptionModule,
		WidgetCompilerModule.forRoot(),

		ThemesModule,
	],
	declarations: [
		AppComponent,
	],
	providers: [
		[ Location, { provide: LocationStrategy, useClass: PathLocationStrategy } ],
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
