import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class = "wrapper">
      <h1>CharacterVerse</h1>
      <h2>Manage your characters and their worlds, and easily share information with your friends!</h2>
      <p>
        CharacterVerse is your one-stop to manage information about your characters used in RPGs or in your own stories. Organize your characters by world, by alignment, by level, or by name.
        Quickly generate new ideas using our name, class, and backstory generators. Need a fresh encounter for your party? Use our Chance Encounters Generator which can create a good, neutral, or evil character(s) for your party to meet.
        The world is yours to create!
      </p>
      <div class="pictures-container">
        <div class="home-pictures">
          <img
            src="/assets/worlds.jfif"
            alt="fantasy map"
          />
          <p>
               Create the perfect world for your protagonists and antagonists and then share it with your friend! CharacterVerse allows you to collaborate and share character profiles with friends.
              Need to keep that secret twin a secret? Maybe your character is a double agent and you don't want your friend to know? Customize what information you choose to share in a profile to maximize your plot twists.
            CharacterVerse has the solution for everyone.
          </p>
        </div>
        <div class="home-pictures">
          <img
            src="/assets/heroes.jfif"
            alt="image of a RPG party posing heroically"
          />
          <p>
           Does your character strive to vanquish evil however and wherever it may rear its ugly head? Manage your character's list of heroic deeds in the characters tab.
          </p>
        </div>
        <div class="home-pictures">
          <img
            src="/assets/villain.jfif"
            alt="the foreboding castle of a villain looms in the distance"
          />
          <p>
          Perhaps your characters are drawn to seek out knowledge and power, even if it leads them down dark paths? But what gave them this drive? Consider using our Tragic Backstory Generator
          to give your antagonist a sympathetic background. Maybe your villain needs a place to keep track of their evil plans? Make sure to write down this information in their character sheet.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .pictures-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }
       .home-pictures {
        text-align: center;
        flex: 0 1 calc(33.333% - 20px);
        box-sizing: border-box;
      }
      .home-pictures img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
      .highlight p {
        margin-top: 10px;
      }
    `,
  ],
})
export class HomeComponent {}

