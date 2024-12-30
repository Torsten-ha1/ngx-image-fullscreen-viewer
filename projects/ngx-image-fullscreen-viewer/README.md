# NgxImageFullscreenViewer

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Description

This library is an update of ng-image-fullscreen-viewer to work with the newest Angular version and uses pure CSS for styling

## Install

Run `npm install ngx-image-fullscreen-viewer` to install the lib into your project

## Usage
Import in Module or Component file:
import { NgxImageFullscreenViewerComponent } from 'ngx-image-fullscreen-viewer'
and add to implorts array.

In template:
<lib-ngx-image-fullscreen-viewer
	[images]="currentFullscreenImages"
	[paginationShow]="true"
	[show]="showViewer"
	(close)="showViewer = false"
></lib-ngx-image-fullscreen-viewer>

## Further help

Send an email and pull requests
