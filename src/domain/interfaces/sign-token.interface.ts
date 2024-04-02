export interface SignToken {
    (payload: Object, expiresIn: string): Promise<string | null>;
}
