import { Component, OnInit } from '@angular/core';
import { PageList } from '../../interface/page-list';
import { fakeListings } from '../../fake-data';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-list',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
})
export class MyListComponent implements OnInit {
  listing: PageList[] = [];
  ngOnInit(): void {
    this.listing = fakeListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listind with id ${listingId}`);
  }
}
