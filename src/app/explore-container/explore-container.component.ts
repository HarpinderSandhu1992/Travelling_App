import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {
  @Input() name?: string;

  constructor(private router: Router) {}

  navigateTickets() {
    this.router.navigate(['/tickets']);
    }
    navigateBudget() {
      this.router.navigate(['/budget']); 
    }
   navigateLuxurious() {
     this.router.navigate(['/luxurious']);
   }
}
