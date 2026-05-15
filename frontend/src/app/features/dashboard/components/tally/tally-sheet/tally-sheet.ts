import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tally-sheet',
  imports: [],
  templateUrl: './tally-sheet.html',
  styleUrl: './tally-sheet.css',
})
export class TallySheet {
  @Input() isOpen = false;

  close() {
    this.isOpen = false;
  }
}
