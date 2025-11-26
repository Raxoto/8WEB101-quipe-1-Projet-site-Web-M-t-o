// src/data.js

export const articles = [
    {
        id: "pressure",
        title: "1) La pression atmosphérique",
        content: [
            {
                subtitle: "Système de haute pression (H)",
                text: "Comme son nom l'indique, la pression est à son plus haut au centre de celui-ci. Il faut le voir comme le point le plus haut d'un relief, le sommet de la montagne. L'air est un liquide. Il veut aller vers le point le plus bas dû à la gravité terrestre. La haute pression repousse l'humidité vers les basses pressions... L'air froid favorise la localisation des systèmes de hautes pressions.",
                list: ["Haute pression des Bermudes", "Haute pression du Pacifique"]
            },
            {
                subtitle: "Système de basse pression (L)",
                text: "Comme son nom l'indique, la pression est à son plus bas au centre de celui-ci. Il faut le voir comme le point le plus bas d'un relief. L'air est un liquide. Les centres de haute pression attirent la plupart de l'humidité de l'atmosphère. C'est pour cette raison que les systèmes de basses pressions sont associés aux précipitations.",
                list: ["Basse pression d'Islande", "Basse pression des Aléoutiennes"]
            }
        ]
    },
    {
        id: "fronts",
        title: "2) Les fronts",
        content: [
            {
                subtitle: "Fronts froids",
                text: "Un front froid est l'avant d'une masse d'air froide qui avance. L'air froid est plus dense que l'air chaud. Lors de son passage, elle pousse vers l'avant et soulève en altitude l'air chaud. Cet air peut se condenser rapidement et créer des phénomènes météo orageux.",
                imageDesc: "Ligne bleue avec des triangles (Blue Line with Triangles)"
            },
            {
                subtitle: "Fronts chauds",
                text: "Un front chaud est l'arrière d'une masse d'air froid qui se retire. L'air chaud remplis le vide créé par ce retrait. L'angle du front est beaucoup plus doux et des nuages plus large et stables peuvent se former.",
                imageDesc: "Ligne rouge avec des demi-cercles (Red Line with Semi-circles)"
            }
        ]
    }
];

// 3D scene data
export const globeData = {
    pressure: {
        labels: [
            { lat: 32.3, lng: -64.7, text: "H", color: "white", size: 2.5, alt: 0.1, id: "pressure" }, // 百慕大附近
            { lat: 65.0, lng: -19.0, text: "L", color: "white", size: 2.5, alt: 0.1, id: "pressure" }  // 冰岛附近
        ],
        paths: []
    },
    fronts: {
        labels: [],
        paths: [
            // frois (bleu)
            {
                coords: [[50, -40], [45, -30], [40, -20]],
                color: "#0000FF", // Blue
                dash: [0.1, 0.05], // lignes
                id: "fronts"
            },
            // chaud (rouge)
            {
                coords: [[40, -60], [42, -50], [44, -40]],
                color: "#FF0000", // Red
                dash: [],
                id: "fronts"
            }
        ]
    }
};