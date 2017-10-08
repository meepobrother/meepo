import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-qqzone-item',
  templateUrl: './qqzone-item.component.html',
  styleUrls: ['./qqzone-item.component.scss']
})
export class QqzoneItemComponent implements OnInit {

  @Input() info: any = {};
  @Input() showCommentAvatar: boolean = false;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() like: EventEmitter<any> = new EventEmitter();
  @Output() comment: EventEmitter<any> = new EventEmitter();
  @Output() share: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.info['thumbs'] = this.info['thumbs'] ? this.info['thumbs'] : []
  }

  _like(info: any){
    info.liked = !info.liked;
    this.info.goods.splice(0,0,{nickname: '昵称2'});
    this.like.emit(info)
  }

  _comment(info: any){
    this.comment.emit(info)
  }

  _share(info: any){
    this.share.emit(info)
  }

}
