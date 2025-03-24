export const hasArrayValues = (list: unknown) => {
    return Array.isArray(list) && list.length > 0;
}