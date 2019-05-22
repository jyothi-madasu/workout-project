import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { Category1Service } from '../../../category1.service';
import { Category } from '../../../category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
/** Add component*/
export class AddComponent implements OnInit {

  public onclick: boolean = false;
  frmcateg: FormGroup;
  @Output() categoryAdded = new EventEmitter<String>();
  constructor(private fb: FormBuilder, private service: Category1Service) { }
  ngOnInit() {
    this.frmcateg = this.fb.group({
     categoryname: new FormControl('', [Validators.required, Validators.minLength(3)])

    });

  }
  get f() {
    return this.frmcateg.controls;
  }
  saveForm(frmcateg: NgForm) {
    if (frmcateg.valid) {
      let categ: Category = new Category(frmcateg.value.id, frmcateg.value.name);
      this.service.save(categ).subscribe(
        (data) => alert('added'),
        (error) => console.log(error)
      );
    }
  }

}
 


