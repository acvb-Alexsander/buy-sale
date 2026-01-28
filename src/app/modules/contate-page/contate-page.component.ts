import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageList } from '../../interface/page-list';
import { fakeListings } from '../../fake-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contate-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contate-page.component.html',
  styleUrl: './contate-page.component.css',
})
export class ContatePageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing?: PageList;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
    this.message = `Hi, I'm interested in your ${this.listing?.title.toLowerCase()}. Please provide more details.`;
  }

  sendMessage(): void {
    alert('Message sent!');
    this.router.navigateByUrl('/page-list/');
  }
}
