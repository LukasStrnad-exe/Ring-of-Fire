import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [],
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss'] // Use 'styleUrls' (plural)
})
export class StartscreenComponent {
  constructor(private router: Router) { }
  
  newGame(){
    this.router.navigate(['/game']);
  }
}
