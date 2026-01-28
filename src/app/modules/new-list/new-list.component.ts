import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataFormComponent } from '../../components/data-form/data-form.component';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [FormsModule, DataFormComponent],
  templateUrl: './new-list.component.html',
  styleUrl: './new-list.component.css',
})
export class NewListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert(`Create a new listing`);
    this.router.navigateByUrl('/my-list');
  }
}
