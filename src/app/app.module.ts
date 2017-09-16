import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyErrorHandler } from './myErrorHandler';

import { ROUTES } from './app.routes';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { Home } from '../pages/home/home';

import { MyApp } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    declarations: [
        MyApp,
        Home
    ],
    providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
    bootstrap: [MyApp]
})

export class AppModule { }
