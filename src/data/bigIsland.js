const bigIsland = [
    //central core
    {
        model: 'hex_grass',
        position: [0, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [2, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-2, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [4, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_A_sloped_low',
        position: [-4, 0, 0],
        rotation: [0, (0 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_A',
        position: [-6, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_A',
        position: [-8, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 0, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 0, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 0, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 0, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [3, 0, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-3, 0, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [3, 0, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-3, 0, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [2, 0, -2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [0, 0, -2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-2, 0, -2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [2, 0, 2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [0, 0, 2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-2, 0, 2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //second level
    {
        model: 'hex_grass',
        position: [0, 1, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [2, 1, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_A_sloped_low',
        position: [-2, 0.5, 0],
        rotation: [0, (0 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 1, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 1, Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [1, 1, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-1, 1, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [0, 0.5, -2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [0, 0.5, 2 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [3, 0.5, -1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-3, 0.5, 1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-3, 0.5, -1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [3, 0.5, 1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //third level
    {
        model: 'hex_grass',
        position: [0, 1.5, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },


    //branches
    {
        model: 'hex_grass',
        position: [10, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_road_A',
        position: [-10, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-5, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [5, 0, -5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [5, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-5, 0, -5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //face 1
    {
        model: 'hex_grass',
        position: [4, 0, -6 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-4, 0, -6 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //face 2
    {
        model: 'hex_grass',
        position: [4, 0, 6 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-4, 0, 6 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },

    //face 3
    {
        model: 'hex_grass',
        position: [7, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_A_waterless',
        position: [11, 0, 1 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    //face 4
    {
        model: 'hex_grass',
        position: [-7, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-11, 0, 1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //face 5
    {
        model: 'hex_grass',
        position: [-7, 0, -5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_grass',
        position: [-11, 0, -1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //face 6
    {
        model: 'hex_grass',
        position: [7, 0, -5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_C_waterless',
        position: [11, 0, -1 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },

    //coast ring
    {
        model: 'hex_coast_C_waterless',
        position: [12, 0, 0],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_C_waterless',
        position: [-12, 0, 0],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },

    {
        model: 'hex_coast_C_waterless',
        position: [6, 0, -6 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_C_waterless',
        position: [6, 0, 6 * Math.sqrt(3)],
        rotation: [0, (0 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_C_waterless',
        position: [-6, 0, -6 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hex_coast_C_waterless',
        position: [-6, 0, 6 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },



]
export default bigIsland;