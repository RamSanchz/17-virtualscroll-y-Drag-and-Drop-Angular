import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css'],
})
export class VirtualComponent implements OnInit {
  // Tomamos un valor del html para hacerlo se usa el @ViewChild
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  personas = Array(1000).fill(0);

  constructor() {}

  ngOnInit(): void {
    console.log(this.personas);
  }

  irFinal(): void {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irInicio(): void {
    this.viewport.scrollToIndex(0);
  }

  irMitad(): void {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
}
