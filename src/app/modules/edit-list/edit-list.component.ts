import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataFormComponent } from '../../components/data-form/data-form.component';
import { PageList } from '../../interface/page-list';
import { fakeListings } from '../../fake-data';

@Component({
  selector: 'app-edit-list',
  standalone: true,
  imports: [DataFormComponent],
  templateUrl: './edit-list.component.html',
  styleUrl: './edit-list.component.css',
})
export class EditListComponent implements OnInit {
  listing?: PageList;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find((listing) => listing.id === id);
  }

  onSubmit(): void {
    alert(`Save changes to list`);
    this.router.navigateByUrl('/my-list');
  }
}
