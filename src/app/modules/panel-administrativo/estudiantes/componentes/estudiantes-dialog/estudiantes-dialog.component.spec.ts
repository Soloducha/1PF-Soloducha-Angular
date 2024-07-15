import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstudiantesDialogComponent } from './estudiantes-dialog.component';

describe('EstudiantesDialogComponent', () => {
  let component: EstudiantesDialogComponent;
  let fixture: ComponentFixture<EstudiantesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstudiantesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
