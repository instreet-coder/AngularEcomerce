import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Statistics } from '../../interfaces/statistics.interface';
import { CompanyStatistics } from '../../data/statics.data';
import { Employee } from '../../interfaces/user.intrface';
import { companyEmployee } from '../../data/user.data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export default class AboutComponent {
  sliderList: Employee[] = companyEmployee;
  @ViewChild("slideList") SlideListElement: ElementRef<HTMLDivElement> | undefined;
  slideIndex = 0;
  slideInterval: any;
  upBtnVisibility: boolean =false;
  companyStatistics: Statistics[] = CompanyStatistics;


  startSlideInterval(){
    this.slideInterval = setInterval(() => this.nextPage(), 3000);
  }
  stopSlideInterval() {
    clearInterval(this.slideInterval);
  }

  nextPage () {
    if (this.slideIndex + 1 < this.sliderList.length) {
      this.slideIndex++;
    } else {
      this.slideIndex = 0;    
    }  
  
    this.scrollSlide();
  }
  

  scrollSlide () {
    if (!this.SlideListElement) 
      return;
    console.log(this.SlideListElement, 'SlideListElement')
    let widthScroll = this.SlideListElement?.nativeElement.scrollWidth / this.sliderList.length;
    this.SlideListElement.nativeElement.scrollTo(
      {left: widthScroll * this.slideIndex}
    )
  }

  paginationSlide(index: number){
    this.stopSlideInterval();
    this.slideIndex = index;
    this.scrollSlide();
    this.startSlideInterval();
  }

  ngOnDestroy(){
    clearInterval(this.slideInterval);
  }

  toTopScroll(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}
