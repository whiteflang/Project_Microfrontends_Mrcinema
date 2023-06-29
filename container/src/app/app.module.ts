    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    
    import { AppComponent } from './app.component';
    import { HomeComponent } from './home/home.component';
    import { AppRoutingModule } from './app-routing.module';
    import { IconsModule } from './icons/icons.module';
    import { HeaderComponent } from './header/header.component';

    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        IconsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
