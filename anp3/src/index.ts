const hi = 'hi'

export function hello(word:string = hi): string {
    return `Hello ${word}`;
}