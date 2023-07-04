    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    
    import { AppComponent } from './app.component';
    import { HomeComponent } from './home/home.component';
    import { AppRoutingModule } from './app-routing.module';
    import { IconsModule } from './icons/icons.module';
    import { HeaderComponent } from './header/header.component';
    import { FooterComponent } from './footer/footer.component';

    @NgModule({
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent
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
