import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'panel[default]',
})
export class PanelDefault { 
    @HostBinding('class.panel-default') _default: boolean = true;
}

@Directive({
    selector: 'panel[primary]',
})
export class PanelPrimary { 
    @HostBinding('class.panel-primary') _default: boolean = true;
}


@Directive({
    selector: 'panel[success]',
})
export class PanelSuccess { 
    @HostBinding('class.panel-success') _default: boolean = true;
}

@Directive({
    selector: 'panel[info]',
})
export class PanelInfo { 
    @HostBinding('class.panel-info') _default: boolean = true;
}

@Directive({
    selector: 'panel[danger]',
})
export class PanelDanger { 
    @HostBinding('class.panel-danger') _default: boolean = true;
}


@Directive({
    selector: 'panel[warning]',
})
export class PanelWarning { 
    @HostBinding('class.panel-warning') _default: boolean = true;
}