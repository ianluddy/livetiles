import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {

  constructor() { }

  ngOnInit() { }
}
