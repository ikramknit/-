
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface StaffMember {
  sr: string;
  name: string;
  designation: string;
  subject: string;
}

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StaffComponent {
  staff = signal<StaffMember[]>([
    { sr: '01', name: 'डॉ० दिनेश कुमार', designation: 'प्र० प्रधानाचार्य', subject: 'इतिहास' },
    { sr: '02', name: 'श्री पवन कुमार', designation: 'प्रवक्ता', subject: 'जीव विज्ञान' },
    { sr: '03', name: 'श्री सजीव कुमार सौन्दर्य', designation: 'प्रवक्ता', subject: 'समाजशास्त्र' },
    { sr: '04', name: 'श्री खालिद अहमद', designation: 'प्रवक्ता', subject: 'अर्थशास्त्र' },
    { sr: '05', name: 'श्री अनिल कुमार', designation: 'प्रवक्ता', subject: 'रसायन विज्ञान' },
    { sr: '06', name: 'श्री आशु कुमार', designation: 'सहायक अध्या०', subject: 'विज्ञान' },
    { sr: '07', name: 'श्री हरदीप सिंह', designation: 'सहायक अध्या०', subject: 'व्यायाम शिक्षक' },
    { sr: '08', name: 'श्रीमती प्रियंका शर्मा', designation: 'सहायक अध्या०', subject: 'हिंदी' },
    { sr: '09', name: 'श्रीमती करुणा रानी', designation: 'सहायक अध्या०', subject: 'सामाजिक विज्ञान' },
    { sr: '10', name: 'श्रीमती प्रियंका', designation: 'सहायक अध्या०', subject: 'अंग्रेजी' },
    { sr: '11', name: 'श्री रजनीश कुमार', designation: 'सहायक अध्या०', subject: 'सामाजिक विज्ञान' },
    { sr: '12', name: 'श्रीमती प्रियंका त्यागी', designation: 'सहायक अध्या०', subject: 'अंग्रेजी' }
  ]);

  artsFaculty = signal<string[]>(['हिंदी', 'अंग्रेजी', 'समाजशास्त्र', 'अर्थशास्त्र', 'इतिहास', 'शारीरिक शिक्षा']);
  scienceFaculty = signal<string[]>(['हिंदी', 'अंग्रेजी', 'भौतिक विज्ञान', 'रसायन विज्ञान', 'जीव विज्ञान/गणित', 'शारीरिक शिक्षा']);
}
