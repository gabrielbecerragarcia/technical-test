import { inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailGuard } from './detail.guard';

describe('SimulatorGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [DetailGuard]
        });
    });

    it('should ...', inject([DetailGuard], (guard: DetailGuard) => {
        expect(guard).toBeTruthy();
    }));
});
