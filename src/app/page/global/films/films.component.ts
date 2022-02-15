import { Component, Input, OnInit } from '@angular/core';
import { Film } from '../models/netflix-model';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
 @Input() public film!: Film
  constructor() { }

  ngOnInit(): void {
  }

}
