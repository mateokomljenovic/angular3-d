import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {

  Model: any = []; 

  constructor(private apiService: ApiService) {
    this.readModel(); 
  } 

  ngOnInit(): void {}

  readModel() {
    this.apiService.getModels().subscribe((data) => {
      this.Model = data; 
    })
  }

}
