import { Component, OnInit } from '@angular/core';
declare const $: any;
@Component({
    selector: 'runner-tab-view',
    templateUrl: './runner-tab-view.html',
    styleUrls: ['./runner-tab-view.scss']
})
export class RunnerTabView implements OnInit {
    constructor() { }

    ngOnInit() { 
		$(document).ready(function(){
			$(".blacklisttab").click(function(){
				$(".collected").hide();
				$(".blacklist").show();
				$(".collectedtab").toggleClass("current");
				$(".blacklisttab").toggleClass("current");
				$(".tabtwo i").animate({left:"62.5%"},500);
			});
			$(".collectedtab").click(function(){
				$(".collected").show();
				$(".blacklist").hide();
				$(".collectedtab").toggleClass("current");
				$(".blacklisttab").toggleClass("current");
				$(".tabtwo i").animate({left:"12.5%"},500);
			});
		});
    }
}
