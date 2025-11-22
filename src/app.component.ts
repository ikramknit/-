
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { StaffComponent } from './components/staff/staff.component';
import { ResultsComponent } from './components/results/results.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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
export class AppComponent {
  title = 'school-website';
}
