import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGallery } from './pokemon-gallery';

describe('PokemonGallery', () => {
  let component: PokemonGallery;
  let fixture: ComponentFixture<PokemonGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonGallery],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
