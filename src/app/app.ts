import { bootstrap } from 'ng-metadata/platform';
import { enableProdMode, provide } from 'ng-metadata/core';

import ModelModule from './../lib/gj-lib-client/components/model/model';
import MetaModule from './../lib/gj-lib-client/components/meta/meta';
import RulerModule from './../lib/gj-lib-client/components/ruler/ruler';
import ScreenModule from './../lib/gj-lib-client/components/screen/screen';
import ImgHelperModule from './../lib/gj-lib-client/components/img/helper/helper';
import ImgResponsiveModule from './../lib/gj-lib-client/components/img/responsive/responsive';
import VideoEmbedModule from '../lib/gj-lib-client/components/video/embed/embed';
import MediaBarModule from '../lib/gj-lib-client/components/media-bar/media-bar';
import GamePlayModalModule from '../lib/gj-lib-client/components/game/play-modal/play-modal';
import HistoryTickModule from '../lib/gj-lib-client/components/history-tick/history-tick';
import LoadModule from '../lib/gj-lib-client/components/load/load';
import TranslateSpoofModule from '../lib/gj-lib-client/components/translate/spoof/spoof';
import PartnerReferralModule from '../lib/gj-lib-client/components/partner-referral/partner-referral';
import PopoverModule from '../lib/gj-lib-client/components/popover/popover';
import ThemeInjectorModule from '../lib/gj-lib-client/components/theme/injector/injector';
import CardModule from '../lib/gj-lib-client/components/card/card';

import { App } from './app-service';
import { AppComponent } from './app.component';

if ( GJ_BUILD_TYPE == 'production' ) {
	enableProdMode();
}

const AppModule = angular.module( 'App', [

	// Libs.
	'ngSanitize',
	'ngAnimate',
	'ui.router',
	'ui.bootstrap.collapse',
	'ui.bootstrap.modal',
	'cfp.hotkeys',
	'hmTouchEvents',

	// GJ lib.
	'gj.Environment',
	'gj.Api',
	'gj.Payload',
	ModelModule,
	MetaModule,
	'gj.Error',

	RulerModule,
	ScreenModule,
	'gj.Analytics',
	'gj.Loading',
	'gj.ExpandWhen',
	'gj.Form',
	'gj.History',
	'gj.Growls',
	'gj.Tooltip',
	'gj.Ruler',

	ImgHelperModule,
	ImgResponsiveModule,
	VideoEmbedModule,

	'gj.WidgetCompiler',

	'gj.MediaItem',
	'gj.Game.Screenshot',
	'gj.Game.Video',
	MediaBarModule,

	'gj.Game',
	'gj.User',
	'gj.Sellable',
	'gj.Sellable.Pricing',
	'gj.Game.Release',
	'gj.Game.Build',
	'gj.Game.Build.File',
	'gj.Game.Build.Param',
	'gj.Game.Build.LaunchOption',
	'gj.Game.Package',
	'gj.Game.Package.Card',
	'gj.Currency',
	GamePlayModalModule,
	HistoryTickModule,
	LoadModule,
	PartnerReferralModule,
	'gj.Time',
	'gj.Ad',
	'gj.Ad.Video',
	'gj.Game.Downloader',
	PopoverModule,

	// I want to remove this!
	'gj.Device',
	'gj.ExpandWhen',
	'gj.Form',
	'gj.Currency',
	'gj.Filesize',

	TranslateSpoofModule,
	ThemeInjectorModule,
	CardModule,
] )
.config( function(
	$locationProvider: ng.ILocationProvider,
	$uiViewScrollProvider: ng.ui.IUiViewScrollProvider,
	EnvironmentProvider: any,
	$sceDelegateProvider: ng.ISCEDelegateProvider,
)
{
	$sceDelegateProvider.resourceUrlWhitelist( [
		'self',
		'https://b6d3e9q9.ssl.hwcdn.net/**',
	] );

	$locationProvider.html5Mode( true ).hashPrefix( '!' );
	$uiViewScrollProvider.useAnchorScroll();

	if ( GJ_ENVIRONMENT == 'development' ) {
		EnvironmentProvider.env = 'development';
	}

	if ( GJ_BUILD_TYPE == 'development' ) {
		EnvironmentProvider.buildType = 'development';
	}
} )
.name;

angular.module( AppModule )
.service( ...provide( 'App', { useClass: App } ) )
.directive( ...provide( AppComponent ) )
;

setTimeout( function()
{
	bootstrap( AppModule );
}, 0 );
