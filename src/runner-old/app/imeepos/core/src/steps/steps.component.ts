import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

export interface StepsProps {
  prefixCls?: string;
  iconPrefix?: string;
  direction?: string;
  labelPlacement?: string;
  children: any;
  status?: string;
  size?: string;
  current?: number;
}

const defaultProps = {
  prefixCls: 'am-steps',
  iconPrefix: 'ant',
  labelPlacement: 'vertical',
  direction: 'vertical',
  current: 0,
  children: [{
    className: ''
  },{
    className: ''
  }]
}

@Component({
  selector: 'steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StepsComponent implements OnInit {
  @Input() current: number = 0;
  @Input() size: string = 'small';
  @Input() direction: string = 'vertical';
  constructor() { }
  props: StepsProps = {} as StepsProps
  stepRefs: any[] = [];
  ngOnInit() {
    this.props = Object.assign(this.props,defaultProps)
    this.render()
  }

  componentDidMount(){
    this.componentDidUpdate();
  }

  componentDidUpdate(){
    if (this.props.direction !== 'horizontal') {
      return;
    }

    this.stepRefs.forEach(s => {
      if (s.refs.tail) {
        s.refs.tail.style.left = `${s.refs.main.offsetWidth / 2}px`;
      }
    });
  }
  children: any[] = []
  render(){
    const { children, status } = this.props;
    this.children = children;
    this.current = this.props.current as number;
  }

}
