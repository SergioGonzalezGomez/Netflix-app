import { Footer } from './../models/netflix-model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public footer!: Footer
  constructor() { }

  ngOnInit(): void {
  }

}
