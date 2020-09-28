import { Component, OnInit } from '@angular/core';
import { Model } from './../../model/Model'; 
import { ActivatedRoute, Router } from "@angular/router"; 
import { ApiService } from './../../service/api.service';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import * as THREE from 'three'

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.scss']
})
export class ModelViewComponent implements OnInit {

  Model:any = []; 

  constructor(
    private actRoute: ActivatedRoute,
    private apiService: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
     let id = this.actRoute.snapshot.paramMap.get('id');
     console.log('id', id)
     this.getModel(id);
  }

  get form() {
    console.log('this.form.controls', this.form.controls)
    return this.form.controls;
  }

  getModel(id) {
    this.apiService.getModel(id).subscribe((data) => {
      console.log(data)
    })
  }


}
