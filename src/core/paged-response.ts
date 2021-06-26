export interface PagedResponse
{
    pageNumber: number;
    pageSize: number;
    itemsCount: number;
    pageCount: number;
    orderBy: string;
}