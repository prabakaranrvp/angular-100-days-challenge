import { Component, OnInit } from '@angular/core';
import { HeroContent } from '../../constants/mock-data';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.scss']
})
export class HeroBannerComponent implements OnInit {
  content = HeroContent;

  constructor() { }

  ngOnInit(): void {
  }

}
