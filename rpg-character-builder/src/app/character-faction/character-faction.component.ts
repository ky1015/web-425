import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
<div class="faction-container">
  <h1>Factions</h1>
  <div class="faction-list" *ngIf="characterFaction">
    <ul>
      <li *ngFor="let faction of characterFaction">
        {{ faction.name }}: {{ faction.description }} <br/> <br/>
      </li>
    </ul>
  </div>
  <div *ngIf="!characterFaction">
    <h1>{{ noFactionMessage }}</h1>
  </div>
</div>
  `,
  styles: `
.faction-container {
display: flex;
flex-direction: column;
padding: 0;
}
.faction-list {
margin: 10px;
}
`,
})
export class CharacterFactionComponent {
  allFactions: any;
  characterFaction: any = null;
  noFactionMessage: string = '';
  constructor(private http: HttpClient) {
    this.allFactions = this.http
      .get(
        `http://localhost:3000/api/character-faction?
factions`
      )
      .subscribe({
        next: (res) => {
          console.log(res);
          this.characterFaction = res;
        },
        error: (err) => {
          console.error('Error fetching daily special', err);
          if (err.error === 'Not found') {
            this.noFactionMessage = 'Server Error';
          } else {
            this.noFactionMessage =
              'No faction found';
          }
          console.log(this.allFactions);
        },
      });
  }
}

