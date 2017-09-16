import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyErrorHandler } from './myErrorHandler';

import { ROUTES } from './app.routes';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { MyApp } from './app.component';
import { Home } from '../pages/home/home';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
