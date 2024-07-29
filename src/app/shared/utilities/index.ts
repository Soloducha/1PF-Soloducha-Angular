export function generarIdRandom(length: number): string {
    const caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cantidadCaracteres = caracteres.length;
    const result = new Array(length);

    for (let i = 0; i < length; i++) {
        result[i] = caracteres.charAt(Math.random() * cantidadCaracteres | 0);
    }

    return result.join('');
}
