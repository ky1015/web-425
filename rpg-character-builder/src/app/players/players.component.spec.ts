import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [PlayersComponent]
  })
  .compileComponents();
    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

  /**
  * Unit test 1: Default Component
  */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
/**
* Unit test 2
*/
  it('should correctly display predetermined player characters', () => {
  const compiled = fixture.nativeElement as HTMLElement;
  const menuItems = compiled.querySelectorAll('.player-item'); // Get all the player characters
  expect(menuItems.length).toEqual(component.player.length); // Check if the number of player characters is equal to the number of items in the player array
});
});
