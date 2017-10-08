

```js
const interval$ = Rx.Observable.interval(100)
    .filter(val=> val %2 === 0)
    .take(4);

interval$.subscribe(
    val => console.log(val),
    err => {
        console.log(err)
    },
    ()=>{
        console.log('complete')
    }
)

```

