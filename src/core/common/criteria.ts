export interface Criteria<T>{
    filters: Record<string, string>,
    order : string,
    page_size ?: number,
    page ?: number,
}
