import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { Category1Service } from '../../../category1.service';
import { Category } from '../../../category';
import { WorkoutService } from '../workout.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
/** Edit component*/
export class EditComponent implements OnInit {
  public click: boolean = true;
  frmCateg: FormGroup;
  @Input() NameAdd: Category;
  constructor(private currentRoute: ActivatedRoute, private service: WorkoutService, private fb: FormBuilder) { }
  get f() {
    return this.frmCateg.controls;
  }

  ngOnInit() {
    this.frmCateg = this.fb.group({

      name: new FormControl(this.NameAdd.categoryname, [Validators.required, Validators.minLength(3)])
    });
    let id = this.currentRoute.snapshot.paramMap.get('id');
  }
  saveForm(frmcateg: NgForm) {
    if (frmcateg.valid) {
      let cat: Category = new Category(frmcateg.value.id, frmcateg.value.name);
      this.service.update().subscribe(
        (data) => alert('updated'),
        (error) => console.log(error)
      );
    }

  }
  public Enable(): void {
    this.f.name.enable();
  }
  public Disabled(): void {
    this.f.name.disable();
  }
}





 

