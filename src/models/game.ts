export class Game {
    public players: string[] = ['player1', 'player2', 'player3', 'player4'];
    public stack: string[] = [];
    public playedCard: string[] = [];
    public currentPlayerIndex: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('ace_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
            this.stack.push('hearts_' + i);
        }

        shuffle(this.stack);
    }
}

function shuffle(stack: string[]) {
  let currentIndex = stack.length;

  while (currentIndex != 0) {

    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [stack[currentIndex], stack[randomIndex]] = [
      stack[randomIndex], stack[currentIndex]];
  }
}