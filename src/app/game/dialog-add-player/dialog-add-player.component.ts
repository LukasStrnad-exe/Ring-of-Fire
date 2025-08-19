import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogRef,} from '@angular/material/dialog';
import {ChangeDetectionStrategy, inject} from '@angular/core';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatIconModule, FormsModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  readonly dialogRef = inject(MatDialogRef<DialogAddPlayerComponent>);
  name: string = '';
  onNoClick(): void {
    this.dialogRef.close();
  }
}
