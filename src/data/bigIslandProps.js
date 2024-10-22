const bigIslandProps = [

    //central castle
    {
        model: 'building_castle_red',
        position: [0, 1.5, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_gate',
        position: [-2, 1, 0],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_outside',
        position: [2, 1, 0],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_outside',
        position: [-1, 1, Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_outside',
        position: [1, 1, Math.sqrt(3)],
        rotation: [0, (0 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_outside',
        position: [-1, 1, -Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'wall_corner_A_outside',
        position: [1, 1, -Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    //forest around castle
    {
        model: 'hills_A_trees',
        position: [-3, 0.5, -Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_C_trees',
        position: [-3, 0.5, Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_A_trees',
        position: [-2, 0, -2 * Math.sqrt(3)],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-1, 1, -Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },


    //starting dock
    {
        model: 'building_docks_red',
        position: [-12, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
];

export default bigIslandProps;