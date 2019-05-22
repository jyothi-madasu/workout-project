import { Component ,OnInit} from '@angular/core';
import { Category1Service } from '../../../category1.service';
import { Category } from '../../../category';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  category: Category[];
  constructor(private service: Category1Service) { }
   
  ngOnInit() {
    this.service.getCategory().subscribe(
      (data) => this.category = data,
      (error) => alert("error processing request")
    );
  }
  
}

