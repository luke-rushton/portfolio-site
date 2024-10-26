const githubTiles = [
    {
        model: 'hex_road_M',
        position: [0, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
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
        model: 'hex_road_B',
        position: [1, 0, 1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 0, 1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 0, -1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_A_waterless',
        position: [-1, 0, -1 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },

]

export default githubTiles;