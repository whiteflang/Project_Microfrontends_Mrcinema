import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
    imports: [
      MatCardModule,
      MatButtonModule,
      MatProgressBarModule,
      RouterModule
    ],
    exports: [
      MovieCardComponent,
      ProductCardComponent
    ],
    declarations: [
      MovieCardComponent,
      ProductCardComponent,
    ],
    providers: [],
})
export class SharedModule { }
