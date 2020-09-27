import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import {gsap} from 'gsap/all';

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

  readModel() {
    this.apiService.getModels().subscribe((data) => {
      this.Model = data; 
    })
  }

}
