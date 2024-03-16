import { Component, OnInit } from '@angular/core';
import { Monde } from 'src/app/models/monde';
import { MondeService } from 'src/app/services/monde.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  mondeToDisplay: Monde[] = [];

  constructor(private mondeService: MondeService) { }

  ngOnInit(): void {
    this.mondeService.getMonde().subscribe((data) => {
      this.mondeToDisplay = data;
      console.log(this.mondeToDisplay);
    })
  }

}
