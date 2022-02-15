import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../models/netflix-model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@Input() public navbar!: Navbar
public btnText: string = "🌑"
  constructor() { }

  ngOnInit(): void {
  }
  public setDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
    this.btnText == '🌑' ? this.btnText = '☀️' : this.btnText = '🌑'
  }
}
