import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() valueProgress: number;

  constructor() { }

  ngOnInit() {
    console.log('Progress', this.valueProgress);
  }

}
