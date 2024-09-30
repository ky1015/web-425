import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import {GuildForm} from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
      <div class="guilds">
        <h1>Guilds</h1>
        <div class="guild-container">
        <div *ngIf="!preexistingGuilds.length">
          <p>Error Encountered</p>
        </div>
          @for(guild of preexistingGuilds; track guild) {
          <div class="guild-card">
            <h2>{{ guild.guildName }}</h2>
            <h3>Type:</h3>
            <ul class="types-list">
              <li>{{ guild.guildType }}</li>
            </ul>
            <h3>Description</h3>
            <p>{{ guild.guildDescription }}</p>
          </div>
          }
        </div>
      </div>
  `,
  styles: `

.guild-container {
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
gap: 30px;
}
.guild-card {
flex: 0 0 calc(50% - 20px);
box-sizing: border-box;
border: 5px solid #035E1B;
border-radius: 5px;
padding: 20px;
margin: 10px 0;
background-color: beige;
}
.types-list {
list-style-type: none;
padding: 0;
}
.types-list li {
padding: 5px 0;
}
`,
})
export class GuildListComponent {
 @Input () preexistingGuilds!: GuildForm[];
}
