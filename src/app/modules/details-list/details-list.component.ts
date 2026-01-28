import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PageList } from '../../interface/page-list';
import { fakeListings } from '../../fake-data';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-details-list',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './details-list.component.html',
  styleUrl: './details-list.component.css',
})
export class DetailsListComponent implements OnInit {
  listing!: PageList;
  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.router.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id)!;
  }
}
