
import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';

interface ClassResult {
  total: number;
  passed: number;
  failed: number;
  percentage: string;
  toppers: { name: string; score: string; }[];
}

interface YearlyResult {
  year: string;
  class10: ClassResult;
  class12: ClassResult;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent {
  private resultsData: YearlyResult[] = [
    { year: '2023-24', class10: { total: 15, passed: 8, failed: 7, percentage: '53.33%', toppers: [{ name: 'नितिन कुमार', score: '70.20' }, { name: 'कार्तिक सैनी', score: '58.80' }, { name: 'विनीत कुमार', score: '51.80' }] }, class12: { total: 4, passed: 4, failed: 0, percentage: '100%', toppers: [{ name: 'शिवम', score: '70.80' }, { name: 'सौरभ', score: '69.00' }, { name: 'अक्षय कुमार', score: '62.40' }] }},
    { year: '2022-23', class10: { total: 26, passed: 21, failed: 5, percentage: '80.76%', toppers: [{ name: 'विशाल शर्मा', score: '65.60' }, { name: 'पीयूष धीमान', score: '62.00' }, { name: 'नितिन प्रभात', score: '55.80' }] }, class12: { total: 8, passed: 7, failed: 1, percentage: '87.50%', toppers: [{ name: 'अजय', score: '75.83' }, { name: 'आकाश', score: '71.50' }, { name: 'सोनू', score: '68.83' }] }},
    { year: '2021-22', class10: { total: 24, passed: 24, failed: 0, percentage: '100%', toppers: [{ name: 'आकाश कुमार', score: '75.60' }, { name: 'कन्हैयालाल', score: '63.60' }, { name: 'मयंक कुमार ब्रह्मगौड़', score: '59.80' }] }, class12: { total: 6, passed: 6, failed: 0, percentage: '100%', toppers: [{ name: 'सोनू सैनी', score: '70.16' }, { name: 'ईशांत', score: '66.66' }, { name: 'शिवलाल', score: '62.16' }] }},
    { year: '2020-21', class10: { total: 15, passed: 15, failed: 0, percentage: '100%', toppers: [{ name: 'सोनू', score: '75.20' }, { name: 'राहुल सहगल', score: '52.80' }, { name: 'आकाश कुमार', score: '44.60' }] }, class12: { total: 2, passed: 2, failed: 0, percentage: '100%', toppers: [{ name: 'विकास कुमार', score: '55.67' }, { name: 'कुणाल', score: '50.00' }] }},
    { year: '2019-20', class10: { total: 18, passed: 11, failed: 7, percentage: '61.11%', toppers: [{ name: 'अखिल चौधरी', score: '71.20' }, { name: 'अंकित कुमार', score: '65.40' }, { name: 'सोनू कुमार सैनी', score: '58.20' }] }, class12: { total: 12, passed: 8, failed: 4, percentage: '66.66%', toppers: [{ name: 'जुनैद', score: '76.16' }, { name: 'विकास कुमार', score: '61.83' }, { name: 'अंकित सैनी', score: '52.66' }] }},
    { year: '2018-19', class10: { total: 18, passed: 16, failed: 2, percentage: '88.88%', toppers: [{ name: 'अभिषेक', score: '67.50' }, { name: 'रोहित', score: '67.00' }, { name: 'दीपांशु', score: '63.16' }] }, class12: { total: 9, passed: 7, failed: 2, percentage: '77.77%', toppers: [{ name: 'तनवीर', score: '61.83' }, { name: 'सचिन', score: '60.83' }, { name: 'अरुण सैनी', score: '55.66' }] }},
    { year: '2017-18', class10: { total: 18, passed: 18, failed: 0, percentage: '100%', toppers: [{ name: 'मनीष सैनी', score: '76.00' }, { name: 'अर्जुन', score: '75.50' }, { name: 'गौरव कुमार', score: '74.16' }] }, class12: { total: 7, passed: 7, failed: 0, percentage: '100%', toppers: [{ name: 'विशाल सैनी', score: '68.16' }, { name: 'अर्पित कुमार', score: '59.83' }, { name: 'आशु कुमार', score: '58.67' }] }},
  ];

  years = this.resultsData.map(r => r.year);
  selectedYear = signal(this.years[0]);

  selectedResult = computed(() => {
    return this.resultsData.find(r => r.year === this.selectedYear());
  });

  selectYear(year: string) {
    this.selectedYear.set(year);
  }
}
