  import { Component, Input } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { Sheet } from '../create-character/create-character.component';

  @Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sheet-summary">
      <h1>Character Sheet</h1>
        <div *ngIf="sheet.characters.length > 0; else noCharacters">
          <ul>
          <div class = "card">
            <li *ngFor="let character of sheet.characters">
              <strong>{{ character.name }}</strong> <br />
              {{ character.gender }}<br />
             {{ character.characterClass}}
            </li>
            </div>
          </ul>
          </div>
    <ng-template #noCharacters>
      <p>You have not created a character yet.</p>
    </ng-template>
    </div>
  `,
  styles: [ `

  .sheet-form-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .sheet-form {
    flex: 1;
    margin-right: 20px;
  }

  .sheet-summary {
    flex: 1;
  }

  fieldset {
    margin-bottom: 20px;
  }

  label, select, gender {
    display: block;
    margin-bottom: 5px;
  }

  .gender, select, input[type="submit"] {
    padding: 8px;
    box-sizing: border-box;
  }

  select {
    width: 100%;
  }

  .gender {
    width: 20%;
  }

  input[type="submit"] {
    float: right;
  }

  .sheet-summary li {
    margin-bottom: 10px;
    padding: 5px;
  }

  .card {
    padding: 20px;
    background-color: #B2AC88;
  }

  .card:hover{
    background-color: #ccc;
  }
  `
  ]
  })
  export class CharacterListComponent {
    @Input() sheet!: Sheet;
  generateCharacter() {
   return this.sheet.characters;
  }
  }
