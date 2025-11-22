import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ImageService, RequiredImage } from '../../services/image.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageUploaderComponent {
  imageService = inject(ImageService);
  authService = inject(AuthService);
  
  images = this.imageService.requiredImages;

  onFileSelected(event: Event, image: RequiredImage): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageService.updateImagePreview(image.id, e.target?.result ?? null);
      };
      reader.readAsDataURL(file);
    }
  }

  logout(): void {
    this.authService.logout();
  }
}
