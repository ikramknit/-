import { Injectable, signal } from '@angular/core';

export interface RequiredImage {
  id: string;
  description: string;
  path: string;
  preview?: string | ArrayBuffer | null;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  requiredImages = signal<RequiredImage[]>([
    // Header
    { id: 'up-logo', description: 'UP Government Logo (Header)', path: '/assets/images/up-logo.png' },
    { id: 'school-logo', description: 'School Logo (Header)', path: '/assets/images/school-logo.png' },
    // Hero
    { id: 'building', description: 'School Building (Introduction)', path: '/assets/images/building.jpeg' },
    // Gallery
    { id: 'yoga1', description: 'Gallery: Yoga 1', path: '/assets/images/gallery/yoga1.jpeg' },
    { id: 'prayer1', description: 'Gallery: Prayer', path: '/assets/images/gallery/prayer1.jpeg' },
    { id: 'yoga2', description: 'Gallery: Yoga 2', path: '/assets/images/gallery/yoga2.jpeg' },
    { id: 'smartclass1', description: 'Gallery: Smart Class 1', path: '/assets/images/gallery/smartclass1.jpeg' },
    { id: 'computerlab1', description: 'Gallery: Computer Lab', path: '/assets/images/gallery/computerlab1.jpeg' },
    { id: 'smartclass2', description: 'Gallery: Smart Class 2', path: '/assets/images/gallery/smartclass2.jpeg' },
    { id: 'classroom1', description: 'Gallery: Classroom 1', path: '/assets/images/gallery/classroom1.jpeg' },
    { id: 'classroom2', description: 'Gallery: Classroom 2', path: '/assets/images/gallery/classroom2.jpeg' },
    { id: 'library1', description: 'Gallery: Library', path: '/assets/images/gallery/library1.jpeg' },
    { id: 'lab1', description: 'Gallery: Science Lab 1', path: '/assets/images/gallery/lab1.jpeg' },
    { id: 'lab2', description: 'Gallery: Science Lab 2', path: '/assets/images/gallery/lab2.jpeg' },
    { id: 'sports1', description: 'Gallery: Sports 1', path: '/assets/images/gallery/sports1.jpeg' },
    { id: 'sports2', description: 'Gallery: Sports 2', path: '/assets/images/gallery/sports2.jpeg' },
    { id: 'sports3', description: 'Gallery: Sports 3', path: '/assets/images/gallery/sports3.jpeg' },
    { id: 'hostel1', description: 'Gallery: Hostel', path: '/assets/images/gallery/hostel1.jpeg' },
    { id: 'mess1', description: 'Gallery: Mess Hall', path: '/assets/images/gallery/mess1.jpeg' },
    { id: 'activity_welcome', description: 'Gallery: Welcome Activity', path: '/assets/images/gallery/activity_welcome.jpeg' },
    { id: 'activity_scouts', description: 'Gallery: Scouts Activity', path: '/assets/images/gallery/activity_scouts.jpeg' },
    { id: 'activity_plantation', description: 'Gallery: Plantation Activity', path: '/assets/images/gallery/activity_plantation.jpeg' },
    { id: 'activity_cleaning', description: 'Gallery: Cleaning Drive', path: '/assets/images/gallery/activity_cleaning.jpeg' },
    { id: 'activity_cultural', description: 'Gallery: Cultural Event', path: '/assets/images/gallery/activity_cultural.jpeg' },
    { id: 'activity_health', description: 'Gallery: Health Checkup', path: '/assets/images/gallery/activity_health.jpeg' },
  ]);

  updateImagePreview(id: string, preview: string | ArrayBuffer | null) {
    this.requiredImages.update(images => 
      images.map(img => img.id === id ? { ...img, preview } : img)
    );
  }
}
