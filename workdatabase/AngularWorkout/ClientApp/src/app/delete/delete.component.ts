import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkoutService } from '../workout.service';
import { Category } from '../../../category';
import { Observable } from 'rxjs';


@Component({
  selector: 'delete-category',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit {
  category: Category[];

  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService) { }

  ngOnInit() {
    let id = this.currentRoute.snapshot.paramMap.get('id');
    this.service.getById.subscribe(
      (data) => this.category = data,
      (error) => alert('Not found')
    );
  }
  delete() {
    this.service.delete(this.category.categoryid).subscribe(
      (data) => alert('Deleted'),
      (error) => alert('Failed to delete'));
  }
}

