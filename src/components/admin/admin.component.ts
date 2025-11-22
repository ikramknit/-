import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { ImageUploaderComponent } from '../image-uploader/image-uploader.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoginComponent, ImageUploaderComponent]
})
export class AdminComponent {
  authService = inject(AuthService);
}
