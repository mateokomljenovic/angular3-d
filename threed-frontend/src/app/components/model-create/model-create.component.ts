import { Router } from '@angular/router';
import {gsap} from 'gsap/all';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-model-create',
  templateUrl: './model-create.component.html',
  styleUrls: ['./model-create.component.scss']
})

export class ModelCreateComponent implements OnInit {
  submitted: boolean = false;
  modelForm: any = FormGroup;
  ModelProfile: any = ['Sphere', 'Cube', 'Tetrahedron', 'Triangular Prism', 'Parallelepiped', 'Hexaconal Prism', 'Cone', 'Tor', 'Prism']

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private NgZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
  }

ngOnInit(): void {
  this.createAnimation();
  }

  createAnimation(){
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }

  // Form Scheme
  mainForm() {
    this.modelForm = this.fb.group({
      url: ['', [Validators.required]],
      text: ['', [Validators.required]],
      description: ['', [Validators.required]],
      color: ['', [Validators.required]],
      scale: ['', [Validators.required, Validators.pattern('[+-]?([0-9]*[.])?[0-9]+')]]
    })
  }

  // Form control
  get form() {
    return this.modelForm.controls;
  }

  // Dropdown

   updateModel(e){
    this.modelForm.get('description').setValue(e, {
      onlySelf: true
    })
  }

  // Submit
  onSubmit(modelForm) {
    this.submitted = true;
    
    if (!this.modelForm.valid) {
    
      return false
    
    } else {
      this.apiService.createModel(this.modelForm.value)
        .subscribe(
          (res) => {
            console.log('Model successfully created!')
            this.NgZone.run(() => this.router.navigateByUrl('/model-list'))
          }, (err) => {
            console.log(err)
          }
        )
    } 
  }

}
