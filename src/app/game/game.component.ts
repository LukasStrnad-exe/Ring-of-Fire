import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from "./player/player.component";
import { InformationCardComponent } from "./information-card/information-card.component";
import { DialogAddPlayerComponent } from "./dialog-add-player/dialog-add-player.component";
import { MatIconModule } from '@angular/material/icon';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, FormsModule, MatButtonModule, InformationCardComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})

export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;
  readonly dialog = inject(MatDialog);


  constructor() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop() || '';
      this.pickCardAnimation = true;
      setTimeout(() => {
        this.game.playedCard.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 800);
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogAddPlayerComponent, {
  });
  dialogRef.afterClosed().subscribe(name => {
    this.game.players.push(name);
  });
  }

}