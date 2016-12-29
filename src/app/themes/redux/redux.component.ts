import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../../../lib/gj-lib-client/components/game/game.model';
import { GamePackage } from '../../../lib/gj-lib-client/components/game/package/package.model';
import { GameScreenshot } from '../../../lib/gj-lib-client/components/game/screenshot/screenshot.model';
import { GameVideo } from '../../../lib/gj-lib-client/components/game/video/video.model';
import template from 'html!./redux.component.html';

@Component( {
	selector: 'gj-theme-redux',
	template,
})
export class ThemeReduxComponent implements OnInit
{
	@Input() game: Game;
	@Input() packages: GamePackage[];
	@Input() mediaItems: (GameScreenshot | GameVideo)[];

	constructor() { }

	ngOnInit() { }
}
