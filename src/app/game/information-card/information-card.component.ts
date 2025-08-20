import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.scss'
})
export class InformationCardComponent {

}
