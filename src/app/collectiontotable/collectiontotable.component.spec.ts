import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiontotableComponent } from './collectiontotable.component';

describe('CollectiontotableComponent', () => {
  let component: CollectiontotableComponent;
  let fixture: ComponentFixture<CollectiontotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiontotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiontotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
