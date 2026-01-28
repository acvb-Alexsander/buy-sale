import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PageList } from '../../interface/page-list';

@Component({
  selector: 'app-data-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css',
})
export class DataFormComponent implements OnInit {
  @Input() buttonText: string = '';
  @Input() currentName: string | undefined;
  @Input() currentDescription: string | undefined;
  @Input() currentPrice: number | undefined;
  @Output() onSubmit = new EventEmitter<PageList>();

  title: string = '';
  description: string = '';
  price: number | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.title = this.currentName ?? '';
    this.description = this.currentDescription ?? '';
    this.price = this.currentPrice;
  }

  onButtonClick(): void {
    this.onSubmit.emit({
      id: '',
      title: this.title,
      description: this.description,
      price: Number(this.price),
    });
  }
}
