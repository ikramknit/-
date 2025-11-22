
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface GallerySection {
  title: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  gallerySections = signal<GallerySection[]>([
    {
      title: 'प्रातःकालीन योगा एवं प्रार्थना',
      description: 'विद्यालय के प्रातः कालीन योगा एवं प्रार्थना स्थल पर प्रतिदिन अलग-अलग प्रार्थना, कविता, कहानी, समाचार एवं पी०टी० कराई जाती है।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/yoga1.jpeg',
        'https://rapvjauladindoli.in/images/gallery/prayer1.jpeg'
      ]
    },
    {
      title: 'डिजिटल शिक्षा (स्मार्ट क्लास)',
      description: 'छात्रों हेतु स्मार्ट क्लास संचालित की जाती है। डिजिटल शिक्षा के अंतर्गत छात्रों को प्रोजेक्टर, टैब लैब एवं कंप्यूटर लैब में आधुनिक शिक्षा प्रदान की जाती है।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/smartclass1.jpeg',
        'https://rapvjauladindoli.in/images/gallery/computerlab1.jpeg'
      ]
    },
    {
      title: 'कक्षाएँ',
      description: 'सभी कक्षाएं हवादार, विद्युत्, पंखे, एवं बत्ती युक्त हैं।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/classroom1.jpeg',
        'https://rapvjauladindoli.in/images/gallery/classroom2.jpeg'
      ]
    },
    {
      title: 'पुस्तकालय',
      description: 'छात्रों में किताबें पढ़ने की आदत को विकसित करने एवं ज्ञानवर्धन के लिए पुस्तकालय की व्यवस्था है।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/library1.jpeg'
      ]
    },
    {
      title: 'प्रयोगशाला',
      description: 'विद्यालय में जीव विज्ञान, भौतिक विज्ञान, एवं रसायन विज्ञान प्रयोगशाला की व्यवस्था है।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/lab1.jpeg',
        'https://rapvjauladindoli.in/images/gallery/lab2.jpeg'
      ]
    },
    {
      title: 'खेलकूद आयोजन',
      description: 'शारीरिक विकास के लिए विद्यालय में विभिन्न खेलों का आयोजन किया जाता है।',
      images: [
        'https://rapvjauladindoli.in/images/gallery/sports1.jpeg',
        'https://rapvjauladindoli.in/images/gallery/sports2.jpeg'
      ]
    }
  ]);
}
