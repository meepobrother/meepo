export interface PopoverProps {
    onSelect?: (node: any, index?: number) => void;
    renderOverlayComponent?: (values) => any;
    overlay: any;
    disabled?: boolean;
    name?: string;
    style?: any;
    triggerStyle?: any;
    overlayStyle?: any;
    contextStyle?: any;
    children?: any;
    /** web only */
    prefixCls?: string;
    placement?:string;
    align?: any;
    trigger?: any;
}