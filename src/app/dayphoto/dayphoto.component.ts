import { Component, OnInit } from '@angular/core';
import { Dayphoto } from './interfaces/dayphoto.interface';
import { DayphotoService } from './services/dayphoto.service';

@Component({
  selector: 'app-dayphoto',
  templateUrl: './dayphoto.component.html',
  styleUrls: ['./dayphoto.component.css']
})
export class DayphotoComponent implements OnInit {
dayPhoto? : Dayphoto


  constructor(private dayphotoService: DayphotoService) { }

  ngOnInit(): void {
    this.dayphotoService.getDayphoto().subscribe(dayPhoto => this.dayPhoto = dayPhoto)
  }

}
