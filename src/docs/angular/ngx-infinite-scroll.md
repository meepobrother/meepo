
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

@NgModule({
  imports:[ BrowserModule, InfiniteScrollModule ],
  declarations: [ AppComponent, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
```


```ts
import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollThrottle]="50"
		    (scrolled)="onScroll()">
		</div>
	`
})
export class AppComponent {
	onScroll () {
	    console.log('scrolled!!')
	}
}
```

```ts
import { Component } from '@angular/core';

@Component({
	selector: 'app',
	styles: [
		`.search-results {
			height: 20rem;
			overflow: scroll;
		}`
	],
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollThrottle]="50"
		    (scrolled)="onScroll()"
		    [scrollWindow]="false">
		</div>
	`
})
export class AppComponent {
	onScroll () {
	    console.log('scrolled!!')
	}
}

```


```ts
import { Component } from '@angular/core';
import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
	selector: 'app',
	directives: [ InfiniteScroll ],
	template: `
		<div class="search-results"
		    infiniteScroll
		    [infiniteScrollDistance]="2"
		    [infiniteScrollUpDistance]="1.5"
		    [infiniteScrollThrottle]="50"
		    (scrolled)="onScrollDown()"
		    (scrolledUp)="onScrollUp()">
		</div>
	`
})
export class AppComponent {
	onScrollDown () {
	    console.log('scrolled down!!')
	}

	onScrollUp () {
    	console.log('scrolled up!!')
    }
}

```