import { Component } from '@angular/core';

@Component({
  selector: 'app-create-participation-button',
  standalone: true,
  imports: [],
  templateUrl: './create-participation-button.html',
  styleUrl: './create-participation-button.css',
})
export class CreateParticipationButton {
  openTally() {
    window.open('https://tally.so/r/SEU_LINK', '_blank');
  }
}
