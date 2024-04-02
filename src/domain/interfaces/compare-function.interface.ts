export interface CompareFunction {
    (password: string, hash: string): boolean;
}
