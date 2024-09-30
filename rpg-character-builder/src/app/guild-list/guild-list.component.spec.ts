import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuildListComponent } from './guild-list.component';
import {CommonModule} from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { GuildForm } from '../create-guild/create-guild.component';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
    }).compileComponents();
    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display message for empty guild', () => {
    component.preexistingGuilds = [];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'Error Encountered'
    );
  });
  it('should display details for each guild', () => {
    const mockGuild: GuildForm = {
      guildName: 'Happy Feet',
      guildType: 'Social',
      guildDescription: 'Dance the night away'
    };
    component.preexistingGuilds = [mockGuild];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Social');
    expect(compiled.querySelector('li').textContent).toContain(
      'Social'
    );
  });
});
