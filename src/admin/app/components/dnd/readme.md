- custom-data
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'custom-data',
    template: `
<h4>Transfer custom data in Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dragData]="transferData">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>{{transferData | json}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info" (onDropSuccess)="transferDataSuccess($event)">
            <div class="panel-heading">Place to drop (Items:{{receivedData.length}})</div>
            <div class="panel-body">
                <div [hidden]="!receivedData.length > 0" *ngFor="let data of receivedData">{{data | json}}</div>
            </div>
        </div>
    </div>
</div>`
})
export class CustomDataComponent {
    transferData: Object = {id: 1, msg: 'Hello'};
    receivedData: Array<any> = [];

    transferDataSuccess($event: any) {
        this.receivedData.push($event);
    }
}
```

- custom-function

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'custom-function',
    template: `
<h4>Use a custom function to determine where dropping is allowed</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragData]="6">
                    <div class="panel-body">dragData = 6</div>
                </div>
                <div class="panel panel-default" dnd-draggable [dragData]="10">
                    <div class="panel-body">dragData = 10</div>
                </div>
                <div class="panel panel-default" dnd-draggable [dragData]="30">
                    <div class="panel-body">dragData = 30</div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <pre>allowDropFunction(baseInteger: any): any {{ '{' }}
  return (dragData: any) => dragData % baseInteger === 0;
{{ '}' }}</pre>
        <div class="row">
            <div class="col-sm-6">
                <div dnd-droppable class="panel panel-info" [allowDrop]="allowDropFunction(box1Integer)" (onDropSuccess)="addTobox1Items($event)">
                    <div class="panel-heading">
                        Multiples of
                        <input type="number" [(ngModel)]="box1Integer" style="width: 4em">
                        only
                    </div>
                    <div class="panel-body">
                        <div *ngFor="let item of box1Items">dragData = {{item}}</div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div dnd-droppable class="panel panel-warning" [allowDrop]="allowDropFunction(box2Integer)" (onDropSuccess)="addTobox2Items($event)">
                    <div class="panel-heading">
                        Multiples of
                        <input type="number" [(ngModel)]="box2Integer" style="width: 4em">
                        only
                    </div>
                    <div class="panel-body">
                        <div *ngFor="let item of box2Items">dragData = {{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`
})
export class CustomFunctionComponent {
    box1Integer: number = 3;
    box2Integer: number = 10;

    box1Items: string[] = [];
    box2Items: string[] = [];

    allowDropFunction(baseInteger: number): any {
        return (dragData: any) => dragData % baseInteger === 0;
    }

    addTobox1Items($event: any) {
        this.box1Items.push($event.dragData);
    }

    addTobox2Items($event: any) {
        this.box2Items.push($event.dragData);
    }
}
```


- shopping-basket

```ts

import { Component } from '@angular/core';

@Component({
    selector: 'shoping-basket',
    template: `
<h4>Drag-and-Drop - Shopping basket</h4>
<div class="row">

    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">Available products</div>
            <div class="panel-body">
                <div *ngFor="let product of availableProducts" class="panel panel-default"
                    dnd-draggable [dragEnabled]="product.quantity>0" [dragData]="product" (onDragSuccess)="orderedProduct($event)" [dropZones]="['demo1']">
                    <div class="panel-body">
                        <div [hidden]="product.quantity===0">{{product.name}} - \${{product.cost}}<br>(available: {{product.quantity}})</div>
                        <div [hidden]="product.quantity>0"><del>{{product.name}}</del><br>(NOT available)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable (onDropSuccess)="addToBasket($event)" [dropZones]="['demo1']" class="panel panel-info">
            <div class="panel-heading">Shopping Basket<br>(to pay: \${{totalCost()}})</div>
            <div class="panel-body">
                <div *ngFor="let product of shoppingBasket" class="panel panel-default">
                    <div class="panel-body">
                    {{product.name}}<br>(ordered: {{product.quantity}}<br>cost: \${{product.cost * product.quantity}})
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class ShoppingBasketComponent {
    availableProducts: Array<Product> = [];
    shoppingBasket: Array<Product> = [];

    constructor() {
        this.availableProducts.push(new Product('Blue Shoes', 3, 35));
        this.availableProducts.push(new Product('Good Jacket', 1, 90));
        this.availableProducts.push(new Product('Red Shirt', 5, 12));
        this.availableProducts.push(new Product('Blue Jeans', 4, 60));
    }

    orderedProduct($event: any) {
        let orderedProduct: Product = $event.dragData;
        orderedProduct.quantity--;
    }

    addToBasket($event: any) {
        let newProduct: Product = $event.dragData;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            if (product.name === newProduct.name) {
                product.quantity++;
                return;
            }
        }
        this.shoppingBasket.push(new Product(newProduct.name, 1, newProduct.cost));
        this.shoppingBasket.sort((a: Product, b: Product) => {
            return a.name.localeCompare(b.name);
        });
    }

    totalCost(): number {
        let cost: number = 0;
        for (let indx in this.shoppingBasket) {
            let product: Product = this.shoppingBasket[indx];
            cost += (product.cost * product.quantity);
        }
        return cost;
    }
}

class Product {
  constructor(public name: string, public quantity: number, public cost: number) {}
}
```

- simple
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'dnd-simple',
    template: `
<h4>Simple Drag-and-Drop</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="card border-dark mb-3">
            <div class="card-header">Available to drag</div>
            <div class="card-body text-dark">

                <div class="card text-white bg-primary mb-3" style="max-width: 20rem;" 
                    dnd-draggable [dragEnabled]="true">
                    <div class="card-body">
                        <p class="card-text">Drag Me</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div class="card border-info mb-3" style="max-width: 20rem;">
            <div class="card-header">Place to drop</div>
            <div class="card-body text-info" 
                    dnd-droppable (onDropSuccess)="simpleDrop=simpleDrop + 1">
                <p class="card-text" *ngIf="simpleDrop">Dropped {{simpleDrop}} times</p>
            </div>
        </div>
    </div>
</div>`
})
export class DndSimpleComponent {
    simpleDrop: number = 0;
}
```

- zone
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'zone',
    template: `
<h4>Restricted Drag-and-Drop with zones</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-primary">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dropZones]="['zone1']">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>Zone 1 only</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-success">
            <div class="panel-heading">Available to drag</div>
            <div class="panel-body">
                <div class="panel panel-default" dnd-draggable [dragEnabled]="true" [dropZones]="['zone1', 'zone2']">
                    <div class="panel-body">
                        <div>Drag Me</div>
                        <div>Zone 1 & 2</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-info" [dropZones]="['zone1']" (onDropSuccess)="restrictedDrop1=$event">
            <div class="panel-heading">Zone 1</div>
            <div class="panel-body">
                <div *ngIf="restrictedDrop1">Item was dropped here</div>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <div dnd-droppable class="panel panel-warning" [dropZones]="['zone2']" (onDropSuccess)="restrictedDrop2=$event">
            <div class="panel-heading">Zone 2</div>
            <div class="panel-body">
                <div *ngIf="restrictedDrop2">Item was dropped here</div>
            </div>
        </div>
    </div>
</div>`
})
export class ZoneComponent {
    restrictedDrop1: any = null;
    restrictedDrop2: any = null;
}
```

- embedded
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'embedded',
    template: `
<h4>Move items between multi list sortable containers</h4>
<div class="row">
    <div class="col-sm-3">
        Drag Containers <input type="checkbox" [(ngModel)]="dragOperation"/>
        <div dnd-sortable-container [sortableData]="containers" [dropZones]="['container-dropZone']">
            <div class="col-sm3"
                    *ngFor="let container of containers; let i = index"
                    dnd-sortable [sortableIndex]="i" [dragEnabled]="dragOperation">
                <div class="panel panel-warning"
                    dnd-sortable-container [sortableData]="container.widgets" [dropZones]="['widget-dropZone']">
                    <div class="panel-heading">
                        {{container.id}} - {{container.name}}
                    </div>
                    <div class="panel-body">
                        <ul class="list-group">
                            <li *ngFor="let widget of container.widgets; let x = index" class="list-group-item"
                                dnd-sortable [sortableIndex]="x" [dragEnabled]="!dragOperation"
                                [dragData]="widget">{{widget.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-info">
            <div class="panel-heading">Widgets</div>
            <div class="panel-body" dnd-droppable (onDropSuccess)="addTo($event)" [dropZones]="['widget-dropZone']">
                <div *ngFor="let widget of widgets" class="panel panel-default">
                    <div class="panel-body">
                        {{widget.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class EmbeddedComponent {
    dragOperation: boolean = false;

    containers: Array<Container> = [
        new Container(1, 'Container 1', [new Widget('1'), new Widget('2')]),
        new Container(2, 'Container 2', [new Widget('3'), new Widget('4')]),
        new Container(3, 'Container 3', [new Widget('5'), new Widget('6')])
    ];

    widgets: Array<Widget> = [];
    addTo($event: any) {
        if ($event) {
            this.widgets.push($event.dragData);
        }
    }
}

class Container {
  constructor(public id: number, public name: string, public widgets: Array<Widget>) {}
}

class Widget {
  constructor(public name: string) {}
}
```

- multi
```ts
import { Component } from '@angular/core';

@Component({
    selector: 'multi',
    template: `
<h4>Multi list sortable</h4>
<div class="row">
    <div class="col-sm-3">
    <div class="panel panel-warning">
        <div class="panel-heading">
        Available boxers
        </div>
        <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listBoxers">
            <ul class="list-group" >
                <li *ngFor="let item of listBoxers; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
            </ul>
        </div>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="panel panel-success">
        <div class="panel-heading">
        First Team
        </div>
        <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listTeamOne">
            <ul class="list-group" >
                <li *ngFor="let item of listTeamOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
            </ul>
        </div>
    </div>
    </div>
    <div class="col-sm-3">
    <div class="panel panel-info">
        <div class="panel-heading">
        Second Team
        </div>
        <div class="panel-body" dnd-sortable-container [dropZones]="['boxers-zone']" [sortableData]="listTeamTwo">
            <ul class="list-group">
                <li *ngFor="let item of listTeamTwo; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
            </ul>
        </div>
    </div>
    </div>
</div>`
})
export class MultiComponent {
    listBoxers: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    listTeamOne: Array<string> = [];
    listTeamTwo: Array<string> = [];
}
```

- recycle-multi
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'recycle-multi',
    template: `
<h4>Simple sortable With Drop into recycle bin</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">
                Favorite drinks
            </div>
            <div class="panel-body" dnd-sortable-container [sortableData]="listOne" [dropZones]="['delete-dropZone']">
                <ul class="list-group">
                    <li *ngFor="let item of listOne; let i = index" class="list-group-item"
                    dnd-sortable [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-default">
            <div class="panel-body" dnd-sortable-container [dropZones]="['delete-dropZone']" [sortableData]="listRecycled">
                Recycle bin: Drag into me to delete it<br/>
            </div>
        </div>
        <div *ngIf="listRecycled.length">
        <b>Recycled:</b> <span>{{listRecycled.toString()}} </span>
        </div>
    </div>
</div>`
})
export class RecycleMultiComponent {
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
    listRecycled: Array<string> = [];
}

```

- simple
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'simple',
    template: `
<h4>Simple sortable</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-success">
            <div class="panel-heading">
                Favorite drinks
            </div>
            <div class="panel-body">
                <ul class="list-group" dnd-sortable-container [sortableData]="listOne">
                    <li *ngFor="let item of listOne; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-default">
            <div class="panel-body">
                My prefences:<br/>
                <span *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}<br/></span>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleComponent {
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
}

```

- simple-sortable-copy
```ts
import {Component} from '@angular/core';

@Component({
    selector: 'simple-sortable-copy',
    template: `
<h4>Simple sortable With Drop into something, without delete it</h4>
<div class="row">
    <div class="col-sm-3">
        <div class="panel panel-warning"
            dnd-sortable-container [sortableData]="sourceList" [dropZones]="['source-dropZone']">
            <div class="panel-heading">Source List</div>
            <div class="panel-body">
                <ul class="list-group">
                    <li *ngFor="let source of sourceList; let x = index" class="list-group-item"
                        dnd-sortable [sortableIndex]="x" [dragEnabled]="true"
                        [dragData]="source">{{source.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-6">
        <div class="panel panel-info">
            <div class="panel-heading">Target List</div>
            <div class="panel-body" dnd-droppable (onDropSuccess)="addTo($event)" [dropZones]="['source-dropZone']">
                <ul class="list-group">
                    <li *ngFor="let target of targetList" class="list-group-item">
                        {{target.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleSortableCopyComponent {

    sourceList: Widget[] = [
        new Widget('1'), new Widget('2'),
        new Widget('3'), new Widget('4'),
        new Widget('5'), new Widget('6')
    ];

    targetList: Widget[] = [];
    addTo($event: any) {
        this.targetList.push($event.dragData);
    }
}

class Widget {
  constructor(public name: string) {}
}
```