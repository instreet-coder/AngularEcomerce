import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { SlideList } from '../../data/slider.data';
import { Slider } from '../../interfaces/slider.interfaces';
import { CommonModule, Time } from '@angular/common';
import { Timer } from '../../interfaces/timer.interfaces';
import { CategoriesComponent } from '../../component/categories/categories.component';
import { Category } from '../../interfaces/categories.interfaces';
import { Categories } from '../../data/categories.data';
import { ProductListComponent } from '../../component/products/product-list/product-list.component';
import { Product } from '../../interfaces/product.interfaces';
import { BestProduct, FlashProduct, OurProduct, } from '../../data/product.data';
import { ProductModalComponent } from '../../component/products/product-modal/product-modal.component';
import { IOffer } from '../../interfaces/offer.interfaces';
import { Offer } from '../../data/offer.data';
import { ArrivalComponent } from '../../component/arrival/arrival.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductListComponent , ProductModalComponent,  CategoriesComponent, ArrivalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {
  sliderList: Slider[] = SlideList;
  @ViewChild("slideList") SlideListElement: ElementRef<HTMLDivElement> | undefined;
  slideIndex = 0;
  slideInterval: any;
  flashTimer: Timer = {};
  flashTimerInterval: any;
  flashProductList: Product[] = FlashProduct;
  offerTimer: Timer = {};
  offerTimerInterval: any;
  offer: IOffer = Offer;
  bestProductList: Product[] = BestProduct;
  OurProductList: Product[] = OurProduct;
  categoryList: Category[] = Categories;
  upBtnVisibility: boolean =false;

  ngOnInit() {
    let timer = new Date();
    timer.setDate(timer.getDate()+3);
    this.flashTimer.allTimeMiliSeconds = timer.getTime();
    this.setTimer(this.flashTimer,this.flashTimerInterval);

    let offerNewTime = new Date();
    offerNewTime.setDate(offerNewTime.getDate()+6);
    this.offerTimer.allTimeMiliSeconds = offerNewTime.getTime();
    this.setTimer(this.offerTimer,this.offerTimerInterval);
  }

  ngAfterViewInit() {
    this.startSlideInterval();
    this.flashTimerInterval = setInterval(() => this.setTimer(this.flashTimer,this.flashTimerInterval),100);
    this.offerTimerInterval = setInterval(() => this.setTimer(this.offerTimer,this.offerTimerInterval),100);
  } 

  @HostListener('window:scroll', [])
  onWindowScroll(){
    this.upBtnVisibility = window.scrollY > 500;
  }

  toTopScroll(){
    window.scrollTo({top: 0, behavior: 'smooth'})
  }


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



  setTimer(timer: Timer, timerInterval:any) {
    if (!timer.allTimeMiliSeconds)
      return;
    let current = timer.allTimeMiliSeconds - new Date().getTime();
    if (current<=0) {
      clearInterval(timerInterval);
      alert("Flash Sales ended")
      return; 
    }
    let days = Math.floor(current / 1000 / 3600 / 24 );
    let hours = Math.floor(current / 1000 / 3600 % 24);
    let minutes = Math.floor(current / 1000 / 60 % 60);
    let seconds = Math.floor(current / 1000 % 60);
    timer.days = days < 10 ? "0" + days: days + "";
    timer.hours = hours < 10 ? "0" + hours: hours + "";
    timer.minutes = minutes < 10 ? "0" + minutes: minutes + "";
    timer.seconds = seconds < 10 ? "0" + seconds: seconds + "";
  }


}