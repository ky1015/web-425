export interface PlayerCharacter {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
  }

  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
    @Component({
      selector: 'app-players',
      standalone: true,
      imports: [ CommonModule ],
      template: `
        <div>
          <h1>Characters</h1>
          <p>Choose a character here. Feel free to modify them as needed!</p>
            <ul class="players-container">
              @for (item of player; track player) {
                <li class="player-item">
                <div class="card">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.gender }}</p>
                  <p>{{ item.class}}</p>
                  <p>{{ item.faction}}</p>
                  <p>{{ item.startingLocation}}</p>
                  <p>{{ item.funFact}}</p>
                </div>
                </li>
                }
              </ul>
          </div>
          `,

    styles: [
      `
        .players-container {
          display: flex;
          flex-wrap: wrap;
          list-style-type: none;
          padding: 0;
          font-family: 'Averia-Serif-Libre', serif;
        }

        .player-item {
          flex: 0 1 calc(33.33% - 20px);
          margin: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

  export class PlayersComponent {
    player: PlayerCharacter[];
      constructor() {
      this.player = [
      {
        "name": "Jake",
        "gender": "Male",
        "class": "Warrior",
        "faction": "JugHeads",
        "startingLocation": "Pandora",
        "funFact": "Jake has a twin brother"
      },

      {
        "name": "Nolan the Knowledgeable",
        "gender": "Male",
        "class": "Wizard",
        "faction": "Seekers of Truth",
        "startingLocation": "Castle Keep",
        "funFact": "Nolan has three cats and does not love them equally."
      },

      {
        "name": "Chappell Gnome",
        "gender": "Female",
        "class": "Bard",
        "faction": "HOTTOGO",
        "startingLocation": "Pink Pony Club",
        "funFact": "Chappell has experienced an unprecedented rise in fame."
      },

      {
        "name": "Thobold the DragonBorn",
        "gender": "Male",
        "class": "Sorcerer",
        "faction": "LizardPeople",
        "startingLocation": "Sewers",
        "funFact": "Thobold has never actually left the sewer system."
      },

      {
        "name": "Aryn",
        "gender": "Female",
        "class": "Druid",
        "faction": "Circle of the Mist",
        "startingLocation": "Small coastal town",
        "funFact": "Aryn has two dogs that she loves equally."
      },

      {
        "name": "Ash",
        "gender": "Male",
        "class": "Monk",
        "faction": "Lightning Wielders",
        "startingLocation": "Pallet Town",
        "funFact": "Ash has never actually won a gym battle."
      },

     {
      "name": "Gidget",
      "gender": "Female",
      "class": "Warlock",
      "faction": "BajaBlasters",
      "startingLocation": "San Bernandino, CA",
      "funFact": "Gidget is known for wanting tacos. Her signature move is an Eldritch Blast."
    },

    {
      "name": "Liz",
      "gender": "Female",
      "class": "Paladin",
      "faction": "LizardPeople",
      "startingLocation": "Sewers",
      "funFact": "Liz is a talented artist"
    },

    {
      "name": "Tabax in Boots",
      "gender": "Male",
      "class": "Rogue",
      "faction": "Works for himself",
      "startingLocation": "The Swamp",
      "funFact": "Known for his dashing feathered hat and tall boots, Tabax is a rogue with style."
    },

    {
      "name": "Clint",
      "gender": "Male",
      "class": "Ranger",
      "faction": "Avengers",
      "startingLocation": "Upstate New York",
      "funFact": "Clint never misses a shot with his bow"
    },
    ];
  }
  }

