import { Component } from '@angular/core';
import { RomanNumeralsService } from './roman-numerals.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'angular-testing';
  num: number;
  response: string;

  constructor(private romanNumeralsService: RomanNumeralsService) { }

  romanNumerals = function() {
    this.response = this.romanNumeralsService.romanNumerals(this.num)
  }
}
