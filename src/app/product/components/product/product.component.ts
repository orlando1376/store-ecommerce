import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();
    today = new Date();

    constructor(
        private cartService: CartService
    ) {
        console.log('1. constructor');
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('2. ngOnChanges');
        console.log(changes);
    }

    ngOnInit() {
        console.log('3. OnInit');
    }

    // ngOnChanges y ngDoCheck hacen lo mismo y no se deben tener al tiempo
    // ngDoCheck() {
    //     console.log('4. DoCheck');
    // }

    ngOnDestroy() {
        console.log('5. OnDestroy');
    }

    addCart() {
        this.cartService.addCart(this.product);
        // this.productClicked.emit(this.product.id);
    }
}
