import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form should be invalid when empty', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });
  it('form should be valid if filled', () => {
    component.guildForm.controls['guildName'].setValue('The Adventurers');
    component.guildForm.controls['guildType'].setValue('Educational');
    component.guildForm.controls['guildTerms'].setValue('Yes');
    component.guildForm.controls['guildDescription'].setValue('Always on the hunt')
    expect(component.guildForm.valid).toBeTruthy();
  });
  it('should call createGuild() on form submit with valid data', () => {
    spyOn(component, 'createGuild');
    component.guildForm.controls['guildName'].setValue('Mystery Twins');
    component.guildForm.controls['guildType'].setValue('Social');
    component.guildForm.controls['guildTerms'].setValue('Yes');
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.createGuild).toHaveBeenCalled();
  });
});
