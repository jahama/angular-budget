import { TestBed } from '@angular/core/testing';

import { ProjectsAddService } from './projects-add.service';

describe('ProjectsAddService', () => {
  let service: ProjectsAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
