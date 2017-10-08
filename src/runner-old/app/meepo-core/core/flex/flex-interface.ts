export interface FlexProps {
    direction?: 'row'|'row-reverse'|'column'|'column-reverse';
    wrap?: 'nowrap'|'wrap'|'wrap-reverse';
    justify?: 'start'|'end'|'center'|'between'|'around';
    align?: 'top'|'start'|'middle'|'center'|'bottom'|'end'|'baseline'|'stretch';s
    disabled?: boolean;
    /* for web */
    alignContent?: 'start'|'end'|'center'|'between'|'around'|'stretch';
    onClick?: () => void;
    prefixCls?: string;
    className?: string;
    role?: string;
    /* for native */
    onPress?: (e?: any) => void;
    onLongPress?: any;
    onPressIn?: any;
    onPressOut?: any;
}

