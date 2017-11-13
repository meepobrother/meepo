export function isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '' || val === undefined);
    }
    return !!val;
}
