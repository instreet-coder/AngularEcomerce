import { Component, NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ArrivalList } from '../../data/arrival.data';
import { Arrival } from '../../interfaces/arrival.interface';

@Component({
  selector: 'app-arrival',
  imports: [CommonModule, ],
  templateUrl: './arrival.component.html',
  styleUrl: './arrival.component.scss'
})
export class ArrivalComponent {
arrivalList: Arrival[] = ArrivalList
}
