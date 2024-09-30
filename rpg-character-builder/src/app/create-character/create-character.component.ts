export interface Character {
  id: number;
  name: string;
  gender: string;
  characterClass: string;
  }

  export interface Sheet {
  characters: Character[];
  sheetId: number;
  }

  import { Component, EventEmitter, Output } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonModule } from '@angular/common';
  import { CharacterListComponent } from "../character-list/character-list.component";

  @Component({
  selector: 'app-sheet',
  standalone: true,
  template: `
  <div class="sheet-form-container">
    <form class="sheet-form" #sheetForm="ngForm"
    (ngSubmit)="generateCharacter()">
      <h1>Fill out the fields with your character's name, gender and class.</h1>
        <fieldset>
          <legend>My Character</legend>
          <label for="characterName">Character Name</label>
            <input type="text" id="characterName" name="name"
            [(ngModel)]="name" ngModel required>

          <label for="gender">Gender</label>
          <select name="gender" id="gender"
          [(ngModel)]="gender" ngModel required>
          <option *ngFor="let g of genders" [value]="g">{{ g }}</option>
          </select>

          <label for="characterClass">Character Class</label>
          <select name="characterClasses" id="characterClass"
          [(ngModel)]="characterClass" ngModel required>
          <option *ngFor="let characterClass of classes" [value]="characterClass">{{ characterClass }}</option>
          </select>
        <input type="submit" value="Add to Sheet" />
      </fieldset>
  </form>

    <div class="sheet-summary">
      <app-character-list [sheet]="sheet"></app-character-list>
          </div>
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

  label, select, .gender {
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
  ],
  imports: [FormsModule, CommonModule, CharacterListComponent],
  })
  export class CreateCharacterComponent {
    characters: Character[];
    sheet: Sheet;
    selectedCharacterId: number;
    name: string;
    gender: string;
    characterClass: string;

    genders: string[];
    classes: string[];

    @Output() sheetUpdated = new EventEmitter<Sheet>();
  constructor() {
  this.characters = [
    {id: 1, name: "Dylan", gender: "Male", characterClass: "Rogue"},
    {id: 20, name: "Nott The Brave", gender: "Female", characterClass: "Warrior"},
  ];

  this.sheet = { characters: [], sheetId: 0 };
  this.selectedCharacterId = this.characters[0].id;
  this.name = "";
  this.gender = "";
  this.characterClass = "";


  this.genders = ['Male', 'Female', 'Other'];
  this.classes = ['Rogue', 'Warrior', 'Mage'];
  }
  generateCharacter() {
    const selectedCharacterNum = Number(this.selectedCharacterId);
    const selectedCharacter = this.characters.find(character => character.id === selectedCharacterNum);
    // random number
    this.sheet.sheetId = Math.floor(Math.random() * 1000) + 1;
    if (selectedCharacter !== undefined) {
      const CharacterToAdd = {
      id: selectedCharacter.id,
      name: this.name,
      gender: this.gender,
      characterClass: this.characterClass
      }
      this.sheet.characters.push(CharacterToAdd);
      console.log('Your Character:', this.sheet);
      this.sheetUpdated.emit(this.sheet);
      this.resetForm();
    } else {
      console.error('Character not found',
      this.selectedCharacterId);
    }
  }

  resetForm () {
  if (this.characters.length > 0) {
  this.selectedCharacterId = this.characters[0].id;
  }
  this.name = "";
  this.gender = "";
  this.characterClass = "";
  }
  }
