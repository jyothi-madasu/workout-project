import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Category1Service } from '../../../category1.service';
import { Category } from '../../../category';

@Component({
    selector: 'app-add-workout',
    templateUrl: './add-workout.component.html',
    styleUrls: ['./add-workout.component.css']
})

export class AddWorkoutComponent implements OnInit {
  categories: Category[];
  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.categories = data,
      (error) => alert('Error')
    );
    }
  frmAddWorkout: FormGroup;
  constructor(private fb: FormBuilder, private service:Category1Service) {
    this.frmAddWorkout = this.fb.group({
      workTitle: new FormControl('', Validators.required),
      workNote: new FormControl(),
      
    });

  }

  get f() {
    return this.frmAddWorkout.controls;
  }
}
