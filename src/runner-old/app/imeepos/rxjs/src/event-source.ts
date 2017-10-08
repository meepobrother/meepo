import {Observable} from "rxjs/Observable";



export function eventSourceObser(url: string){
  return Observable.create(observer=>{
    let EventSource = window['EventSource'];
    let evtSource = new EventSource(url);
    evtSource.onopen = ()=>{
      window['sources'].push(evtSource)
    }
    evtSource.onmessage = (event: any)=>{
      let data = eval('(' + event.data + ')');
      observer.next(data)
    }
    evtSource.onerror = ()=>{
      window['sources'].map(res=>{
        res.close()
        res = null;
      })
    }
  });
}
