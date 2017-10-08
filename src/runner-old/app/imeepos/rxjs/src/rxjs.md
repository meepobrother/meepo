
## 合并类操作符: merge, conccat, startWith

## 合并类操作符: combineLatest, withLatestFrom, zip

```ts

.debounceTime(300) //30毫秒过滤器
.debounce(()=>{}) //过滤函数

.distinct() //整个序列中没有重复
.distinctUntilChanged() //不与序列前一个重复

merge('','') //合并两个流
concat() //
startWith(0) //赋予初始值

combineLatest() //任何一个改变均改变
withLatestFrom() //最新的
zip() //  成对

```