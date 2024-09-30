import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterListComponent } from './character-list.component';
import { CommonModule } from '@angular/common';
import { CreateCharacterComponent, Sheet } from '../create-character/create-character.component';
describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule, CreateCharacterComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    const mockSheet = {
      sheetId: 999,
      characters: [
        { id: 3, name: 'Allison', characterClass: 'Mage', gender: 'Female' },
        { id: 1, name: 'Loki', characterClass: 'Warrior', gender: 'Other'},
      ],
    };
    component.sheet = mockSheet;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display message for empty sheet', () => {
    component.sheet = {sheetId: 1001, characters: [] };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(
      'You have not created a character yet.'
    );
  });
  it('should display details for each character', () => {
    const mockOrder: Sheet = {
      sheetId: 1002,
      characters: [
        { id: 3, name: 'Allison', characterClass: 'Mage', gender: 'Female' },
        { id: 1, name: 'Loki', characterClass: 'Warrior', gender: 'Other'},
      ],
    };
    component.sheet = mockOrder;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Allison');
    expect(compiled.querySelector('li').textContent).toContain(
      'Mage'
    );
  });
});
