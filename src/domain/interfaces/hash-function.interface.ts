export interface HashFunction {
	(password: string): string;
}
