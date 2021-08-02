import Stock from '../stock/Stock';
export default interface Bin {
    id: string;
    name: string;
    totalStock: number;
    createdAt: Date | string;
    updatedAt: Date | string;
    stock?: Array<Stock> | null;
}
