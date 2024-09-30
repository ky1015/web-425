import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { GuildListComponent } from '../guild-list/guild-list.component';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';



export interface GuildForm {
  guildName: string;
  guildType: string;
  guildDescription: string;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <div class="guild-form-container">
      <form
        [formGroup]="guildForm"
        class="guild-form"
        (ngSubmit)="createGuild(); guildForm.reset()"
      >
        <h1>Complete the form below to create your guild.</h1>
        <fieldset>
          <legend>Guild Creator</legend>

          <label>Name your guild</label>
          <input type="text" id="guildName" formControlName="guildName">
          @for(guildName of names; track guildName) {
          {{guildName}} <br/>
          }
          <label> Describe your guild </label>
          <textarea rows="10" formControlName="guildDescription"></textarea>
          <br/>

      <label>What is the purpose of your guild?</label>
<div>
  <ng-container *ngFor="let guildType of types">
    <input type="radio" [value]="guildType" formControlName="guildType" /> {{ guildType }} <br />
  </ng-container>
</div>

<label>How do you want to be notified of updates?</label>
<div formArrayName="guildNotifications">
  <ng-container *ngFor="let notification of notifications; let i = index">
    <input type="checkbox" [formControlName]="i" /> {{ notification }} <br />
  </ng-container>
</div>

<label>Do you agree to the terms and conditions?</label>
<select formControlName="guildTerms">
  <ng-container *ngFor="let guildTerm of terms">
    <option [value]="guildTerm">{{ guildTerm }}</option>
  </ng-container>
</select>


          <input
            type="submit"
            [disabled]="!guildForm.valid"
            value="Submit Guild"
          />
        </fieldset>
      </form>
      <div class="guilds">
        <h1>Guilds</h1>
        <div class="guild-container">
          <app-guild-list [preexistingGuilds]="preexistingGuilds"></app-guild-list>
          </div>
        </div>
    </div>
  `,
  styles: `
.guild-form-container {
display: flex;
flex-direction: column;
width: 80%;
align-items: center;
}
.guild-form, .feedback {
width: 100%;
margin-bottom: 30px;
}
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
label {
display: block;
margin-bottom: 5px;
}
label:first-of-type {
margin-top: 0;
}
label:not(:first-of-type) {
margin-top: 10px;
}
select {
width: 20%;
display: block;
margin-bottom: 5px;
padding: 8px;
box-sizing: border-box;
}
textarea {
width: 100%;
margin-bottom: 5px;
padding: 8px;
box-sizing: border-box;
}
input[type="submit"] {
display: block;
padding: 8px;
margin-bottom: 10px;
box-sizing: border-box;
float: right;
}
input[type="checkbox"], input[type="radio"] {
box-sizing: border-box;
margin-bottom: 10px;
}
fieldset {
margin-bottom: 20px;
}
`,
})
export class CreateGuildComponent {
  names: any;
  types: string[] = ['Educational', 'Casual', 'Competitive', 'Social', 'Other'];
  descriptions: any;
  notifications: string[] = ['Email', 'SMS', 'In-App'];
  terms: string[] = ['Yes', 'No'];
  preexistingGuilds: GuildForm[] = [
    {
      guildName: 'The Crimson Blades',
      guildType: 'Social',
      guildDescription: 'An unlikely group of assassins who are bound to an honor code and protect their kingdom.',
    },
    {
      guildName: 'And They Were Crewmates',
      guildType: 'Casual',
      guildDescription: 'Do you like playing Among Us? We have created a game based off of the concept of Among Us.',
    },
    {
      guildName: 'The Lizard Wizards',
      guildType: 'Educational',
      guildDescription: 'Need some help understanding rules? Ask your questions here!',
    },
    {
      guildName: 'The Legends',
      guildType: 'Competitive',
      guildDescription: 'Want to become a legend of the land? Join us in our noble quests!',
    },
  ];
  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    guildNotifications: this.fb.array(this.notifications.map(() => false)),
    guildDescription: [null, Validators.compose([Validators.required])],
    guildTerms: [null, Validators.required],
    guildType: [null, Validators.required],
  });
  @Output() guildUpdated = new EventEmitter<GuildForm[]>();
  constructor(private fb: FormBuilder) {
  }
  get notificationsArray() {
    return this.guildForm.get('notifications') as FormArray;
  }
  createGuild() {
    if (this.guildForm.valid) {
    const newGuild: GuildForm = {
      guildName: this.guildForm.value.guildName,
      guildType: this.guildForm.value.guildType,
      guildDescription: this.guildForm.value.guildDescription,
    };
    console.log('Complete form value:', newGuild);
    this.preexistingGuilds.push(newGuild);
    alert('Feedback submitted successfully!');
    this.guildUpdated.emit(this.preexistingGuilds);
  } else {
  console.log("Error encountered")
}
  }
}
