const experienceTiles = [
    {
        model: 'hex_road_A',
        position: [0, 0, 0],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [2, 0, 0],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-2, 0, 0],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 0, 1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 0, 1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_D',
        position: [1, 0, -1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 0, -1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },

]

export default experienceTiles;