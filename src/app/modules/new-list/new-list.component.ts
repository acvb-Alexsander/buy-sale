import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css',
})
export class NewListComponent implements OnInit {
  name: string = '';
  description: string = '';
  price: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(`Create a new listing`);
    this.router.navigateByUrl('/my-list');
  }
}
