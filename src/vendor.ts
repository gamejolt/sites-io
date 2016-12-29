// Gotta define all vendor imports we ever use in the lib.
// This way we can make a vendor.js file that we include for all sections of the site.
// It also means that changes to the app.js files won't change the vendor.js file
// so that we can keep this in cache.

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import {
	NgModule,
	Inject,
	Injectable,
	Component,
	Directive,
	Input,
	Output,
	enableProdMode,
	HostListener,
	HostBinding,
	Host,
	Optional,
	Self,
	SkipSelf,
	ViewChild,
	ElementRef,
} from '@angular/core';

import {
	Location,
	LocationStrategy,
	PathLocationStrategy,
	CommonModule,
} from '@angular/common';

import {
	DomSanitizer,
	BrowserModule,
	Title,
	Meta,
	DOCUMENT,
} from '@angular/platform-browser';

import {
	platformBrowserDynamic,
} from '@angular/platform-browser-dynamic';

import {
	FormsModule,
} from '@angular/forms';

import {
	HttpModule,
	Http,
	RequestMethod,
} from '@angular/http';

const ng_core = {
	NgModule,
	Inject,
	Injectable,
	Component,
	Directive,
	Input,
	Output,
	enableProdMode,
	HostListener,
	HostBinding,
	Host,
	Optional,
	Self,
	SkipSelf,
	ViewChild,
	ElementRef,
};

const ng_common = {
	Location,
	LocationStrategy,
	PathLocationStrategy,
	CommonModule,
};

const ng_platformBrowser = {
	DomSanitizer,
	BrowserModule,
	Title,
	Meta,
	DOCUMENT,
};

const ng_platformBrowserDynamic = {
	platformBrowserDynamic,
};

const ng_forms = {
	FormsModule,
};

const ng_http = {
	HttpModule,
	Http,
	RequestMethod,
};

export default {
	ng_core,
	ng_common,
	ng_platformBrowser,
	ng_platformBrowserDynamic,
	ng_forms,
	ng_http,
};
