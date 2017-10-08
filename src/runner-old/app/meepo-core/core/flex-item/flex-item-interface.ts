

export interface FlexItemProps {
    disabled?: boolean;
    /* for web */
    prefixCls?: string;
    className?: string;
    /* for native */
    flex?: number;
    onPress?: (e?: any) => void;
    onLongPress?: any;
    onPressIn?: any;
    onPressOut?: any;
}