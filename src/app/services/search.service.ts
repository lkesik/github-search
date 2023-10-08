import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private router: Router) { }

  search(searchTerm: string) {
    this.router.navigate(['/'], {queryParams: {q: searchTerm}});
  }
}
