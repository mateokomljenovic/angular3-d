import { Component, OnInit } from '@angular/core';
import {gsap} from 'gsap/all';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {


  ngOnInit(): void {
    this.createAnimation()
  }
  createAnimation(){
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
    tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
    tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  }
}
