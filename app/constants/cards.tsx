const imagens = [
    'first-img.png',
    'second-img.png',
    'third-img.png',
    'fourth-img.png',
];

const cartasUnicas = imagens.map((imagem, idDoPar) => ({
    idDoPar,
    imagem,
}));

export const paresDeCartas = [...cartasUnicas, ...cartasUnicas].map(
    (carta, id) => ({
        ...cartasUnicas,
        id,
    })
);