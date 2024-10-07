import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {CharacterFactionComponent } from './character-faction.component';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should fetch a list of factions', () => {
    component.characterFaction = [
      {
        name: "The Iron Brotherhood",
        description: "The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit."
      },
      {
        name: "The Arcane Order",
        description: "The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess."
      },
      {
        name: "The Silent Knives",
        description: "The Silent Knives is a faction of skilled rogues. They value stealth, cunning, and precision. Their members are masters of the shadows, using their skills for espionage and assassination."
      },
      {
        name: "The Nature's Guardians",
        description: "The Nature's Guardians is a faction of druids and rangers. They are the protectors of the natural world, using their abilities to maintain the balance between civilization and nature."
      }
     ]
    const faction = component.characterFaction[0].name;
    expect([
      'The Iron Brotherhood',
      'The Silent Knives',
      'The Arcane Order',
      "The Nature's Guardians",
    ]).toContain(faction);
  });
  it('should handle error when faction is not found', () => {
    const expectedMessage = 'No faction found';
    const req =
      httpTestingController.expectOne(`http://localhost:3000/api/character-faction?
factions`);
    req.flush('No faction', { status: 404, statusText: 'Not Found' });
    expect(component.noFactionMessage).toEqual(expectedMessage);
  });
  it('should update characterDiv when character factions are found', () => {
    const mockFaction = {
      name: 'Maroon Daggers',
      description:
        'A group of mercenaries, often on the wrong side of the law',
    };
    const req =
      httpTestingController.expectOne(`http://localhost:3000/api/character-faction?
factions`);
    req.flush(mockFaction);
    expect(component.characterFaction).toEqual(mockFaction);
  });
});


