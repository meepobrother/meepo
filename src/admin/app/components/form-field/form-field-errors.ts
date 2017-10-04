export function getMatFormFieldPlaceholderConflictError(): Error {
    return Error('Placeholder attribute and child element were both specified.');
}

export function getMatFormFieldDuplicatedHintError(align: string): Error {
    return Error(`A hint was already declared for 'align="${align}"'.`);
}

export function getMatFormFieldMissingControlError(): Error {
    return Error('必须包含有输入项目');
}
