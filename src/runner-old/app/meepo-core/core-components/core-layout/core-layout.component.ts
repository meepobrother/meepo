import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoreLayoutComponent implements OnInit {
  _themes: string = 'default';
  @Input() 
  set themes(val: string){
  	this._themes = val;
  	this.getThemes()
  }

  _props: CoreLayoutProps = {
  	name: 'new'
  } as CoreLayoutProps;

  constructor() { 

  }

  ngOnInit() {
  	this._props = Object.assign(DefaultProps,this._props)
  	console.log(this._props)
  }

  getThemes(){

  }

}

export interface CoreLayoutProps{
	name: string,
	layout: string,
}

export const DefaultProps = {
	name: 'default',
	layout: 'column'
}