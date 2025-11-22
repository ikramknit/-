import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { StaffComponent } from '../staff/staff.component';
import { ResultsComponent } from '../results/results.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    GalleryComponent,
    StaffComponent,
    ResultsComponent,
    FooterComponent
  ]
})
export class HomeComponent { }
