import { Component } from '@angular/core';
import { ApiService } from '../../../../../core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'meepo-add-address-view',
    templateUrl: './meepo-add-address-view.html',
    styleUrls: [
        './meepo-add-address-view.scss'
    ]
})
export class MeepoAddAddressView {
    formData: AddressDetail = new AddressDetail();
    constructor(
        public api: ApiService,
        public fb: FormBuilder
    ) {

    }

    setDefaultAddress(){
        this.formData.isDefault = true;
    }

    addAddress() {
        this.api.mpost('address.add', this.formData).subscribe(res => { });
    }

    getAddressDetail(id: string) {
        this.api.mpost('address.detail', { id: id }).subscribe(res => {});
    }
}

export class AddressDetail {
    id: number;
    uniacid: number;
    openid: string;
    realname: string;
    mobile: string;
    lat: string;
    lng: string;
    poiaddress: string;
    poiname: string;
    cityname: string;
    detail: string;
    create_at: string;
    type: string;
    isDefault: boolean;
}