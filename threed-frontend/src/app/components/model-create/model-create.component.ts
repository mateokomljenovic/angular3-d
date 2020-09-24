import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.scss']
})
export class ModelCreateComponent implements OnInit {
  submitted: boolean = false; 
  modelForm: any = FormGroup;
  modelProfile: any = ['Sphere', 'Cube', 'Tetrahedron', 'Triangular Prism', 'Parallelepiped', 'Hexaconal Prism', 'Cone', 'Tor', 'Prism'] 

  constructor(
    public fb: FormBuilder,
    private router: Router, 
    private NgZone: NgZone, 
    private ApiService: ApiService
  ) { 
    this.mainForm(); 
   }

  ngOnInit(): void { }

  mainForm() {
    this.modelForm = this.fb.group({
      url: ['', [Validators.required]],
      text: ['', [Validators.required]],
      description: ['', [Validators.required]],
      color: ['', [Validators.required]],
      scale: ['', [Validators.required, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]] 
    })
  }
}
