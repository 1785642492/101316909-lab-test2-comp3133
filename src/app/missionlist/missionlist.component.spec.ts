import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MissionlistComponent } from './missionlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MissionlistComponent', () => {
  let component: MissionlistComponent;
  let fixture: ComponentFixture<MissionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MissionlistComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
