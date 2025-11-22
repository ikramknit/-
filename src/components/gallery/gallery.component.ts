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
        'assets/images/gallery/yoga1.jpeg',
        'assets/images/gallery/prayer1.jpeg',
        'assets/images/gallery/yoga2.jpeg'
      ]
    },
    {
      title: 'डिजिटल शिक्षा (स्मार्ट क्लास)',
      description: 'छात्रों हेतु स्मार्ट क्लास संचालित की जाती है। डिजिटल शिक्षा के अंतर्गत छात्रों को प्रोजेक्टर, टैब लैब एवं कंप्यूटर लैब में आधुनिक शिक्षा प्रदान की जाती है।',
      images: [
        'assets/images/gallery/smartclass1.jpeg',
        'assets/images/gallery/computerlab1.jpeg',
        'assets/images/gallery/smartclass2.jpeg'
      ]
    },
    {
      title: 'कक्षाएँ',
      description: 'सभी कक्षाएं हवादार, विद्युत्, पंखे, एवं बत्ती युक्त हैं।',
      images: [
        'assets/images/gallery/classroom1.jpeg',
        'assets/images/gallery/classroom2.jpeg'
      ]
    },
    {
      title: 'पुस्तकालय',
      description: 'छात्रों में किताबें पढ़ने की आदत को विकसित करने एवं ज्ञानवर्धन के लिए पुस्तकालय की व्यवस्था है।',
      images: [
        'assets/images/gallery/library1.jpeg'
      ]
    },
    {
      title: 'प्रयोगशाला',
      description: 'विद्यालय में जीव विज्ञान, भौतिक विज्ञान, एवं रसायन विज्ञान प्रयोगशाला की व्यवस्था है।',
      images: [
        'assets/images/gallery/lab1.jpeg',
        'assets/images/gallery/lab2.jpeg'
      ]
    },
    {
      title: 'खेलकूद आयोजन',
      description: 'शारीरिक विकास के लिए विद्यालय में विभिन्न खेलों का आयोजन किया जाता है।',
      images: [
        'assets/images/gallery/sports1.jpeg',
        'assets/images/gallery/sports2.jpeg',
        'assets/images/gallery/sports3.jpeg'
      ]
    },
    {
      title: 'आवासीय व्यवस्था (छात्रावास)',
      description: 'विद्यालय का स्वरूप आवासीय होने के कारण विद्यालय में निर्मित छात्रावास पृथक रूप से बालकों के लिए उपलब्ध है।',
      images: [
        'assets/images/gallery/hostel1.jpeg'
      ]
    },
    {
      title: 'मेस व्यवस्था',
      description: 'विद्यालय में निर्धारित मेन्यू के अनुसार सुव्यवस्थित मेस व्यवस्था सुनिश्चित है। सभी छात्र-छात्राएं भोजनालय के डाइनिंग हाल में ही बैठकर भोजन करते हैं।',
      images: [
        'assets/images/gallery/mess1.jpeg'
      ]
    },
    {
      title: 'विविध गतिविधियां',
      description: 'विद्यालय में छात्रों के सर्वांगीण विकास के लिए विभिन्न गतिविधियों और कार्यक्रमों का आयोजन किया जाता है।',
      images: [
        'assets/images/gallery/activity_welcome.jpeg',
        'assets/images/gallery/activity_scouts.jpeg',
        'assets/images/gallery/activity_plantation.jpeg',
        'assets/images/gallery/activity_cleaning.jpeg',
        'assets/images/gallery/activity_cultural.jpeg',
        'assets/images/gallery/activity_health.jpeg'
      ]
    }
  ]);
}