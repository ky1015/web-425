import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CreateCharacterComponent]
  })

      .compileComponents();
        fixture = TestBed.createComponent(CreateCharacterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

it('should create', () => {
  expect(component).toBeTruthy();
    });

it('should generate a random sheet ID between 1 and 1000 with no decimal places', () => {
  component.generateCharacter(); // This will trigger the generation of a new sheet ID
  expect(component.sheet.sheetId).toBeGreaterThan(0);
  expect(component.sheet.sheetId).toBeLessThanOrEqual(1000);
  expect(Number.isInteger(component.sheet.sheetId)).toBe(true);
});

it('should add a character with correct customization to the sheet', () => {
  component.selectedCharacterId = 1;
  component.name = "Dylan";
  component.gender = "Male";
  component.characterClass = "Rogue";
  component.generateCharacter();
  const addedCharacter = component.sheet.characters[0];
  expect(addedCharacter.id).toBe(1);
  expect(addedCharacter.name).toBe("Dylan");
  expect(addedCharacter.gender).toBe("Male");
  expect(addedCharacter.characterClass).toBe("Rogue");
  });


it('should reset all form fields to their default values after resetForm is called', () => {
  component.selectedCharacterId = 2;
  component.name = "Ethan";
  component.gender = "Male";
  component.characterClass = "Warrior";
  component.resetForm();
  expect(component.selectedCharacterId).toBe(1);
  expect(component.name).toBe("");
  expect(component.gender).toBe("");
  expect(component.characterClass).toBe("");
  })
});
