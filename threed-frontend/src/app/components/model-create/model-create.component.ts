import { Router } from '@angular/router';
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

  ngOnInit() { }

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
    this.form.get('description').setValue(e, {
      onlySelf: true
    })
  }

  // Submit
  onSubmit(modelForm) {
    console.log('modelForm', modelForm)
    console.log('this.submitted', this.submitted)
    this.submitted = true;
    if (!this.modelForm.valid) {
      return false
    } else {
      this.apiService.createModel(this.modelForm.value)
        .subscribe(
          (res) => {
            console.log('Employee successfully created!')
            this.NgZone.run(() => this.router.navigateByUrl('/model-list'))
          }, (err) => {
            console.log(err)
          }
        )
    } 
  }

}
