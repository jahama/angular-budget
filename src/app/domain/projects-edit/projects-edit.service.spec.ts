import { TestBed } from '@angular/core/testing';

import { ProjectsEditService } from './projects-edit.service';

describe('ProjectsEditService', () => {
  let service: ProjectsEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
