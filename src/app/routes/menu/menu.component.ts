import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goAbout(){
    this.router.navigateByUrl('/about');
  }

  goMap(){
    this.router.navigateByUrl('/map');
  }

  back(){
    this.router.navigateByUrl("/");
  }
}
