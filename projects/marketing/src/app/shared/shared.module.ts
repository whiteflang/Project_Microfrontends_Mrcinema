import { NgModule } from '@angular/core';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
      MatCardModule,
      MatButtonModule,
      MatProgressBarModule,
      RouterModule
    ],
    exports: [
      MovieCardComponent
    ],
    declarations: [
      MovieCardComponent,
    ],
    providers: [],
})
export class SharedModule { }
