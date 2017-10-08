import {Observable} from "rxjs/Observable";

import store from 'store';
export function getMyLocation(){
  return Observable.create(o=>{
    let mylocation = store.get('mylocation')
    if(mylocation){
      o.next(mylocation)
    }else{
      o.next(false)
    }
  })
}


export function saveMyLocation(e: any){
  return Observable.create(o=>{
    if(e){
      if(e.lat){
        store.set('mylocation',e)
        o.next(e)
      }else{
        o.next(false)
      }
    }
  })
}
