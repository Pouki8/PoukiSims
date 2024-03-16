// Définition de l'interface pour les Sims
interface Sims {
    idSims: number;
    name: string;
    firstName: string;
    age: string;
}

// Définition de l'interface pour les adresses
interface Adresse {
    idAdresse: number;
    nomAdresse: string;
    descriptionA: string;
    type: string;
    prix: number;
    taille: string;
    sims: Sims[];
}

// Définition de l'interface pour les quartiers
interface Quartier {
    idQuartier: number;
    nomQuartier: string;
    descriptionQ: string;
    adresse: Adresse[];
}

// Définition de l'interface pour les mondes
export interface Monde {
    id: number;
    ville: string;
    image: string;
    icon: string;
    descriptionV: string;
    pack: string;
    quartier: Quartier[];
}
