import { Component, OnInit } from '@angular/core';
import { PageList } from '../../interface/page-list';
import { fakeListings } from '../../fake-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css',
})
export class PageListComponent implements OnInit {
  listing: PageList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listing = fakeListings;
  }
}
