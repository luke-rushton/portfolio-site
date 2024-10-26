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
    //trees to dock
    {
        model: 'tree_single_A',
        position: [-8, 0, -0.5],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [-6.3, 0, 0.5],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [-10, 0, 0.7],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [-4, 0.5, -0.4],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_small',
        position: [-1.3, 1, Math.sqrt(3) + 0.3],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'rock_single_E',
        position: [-9, 0, 0.4],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'rock_single_E',
        position: [-6.5, 0, -0.45],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },

    //starting dock
    {
        model: 'building_docks_red',
        position: [-12, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },

    //other trees
    {
        model: 'hills_A_trees',
        position: [4, 0, 0],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [6, 0, 0],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [8, 0, 0],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_small',
        position: [10, 0, 0],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_small',
        position: [2.2, 1, 0],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [3, 0.5, Math.sqrt(3)],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_C_trees',
        position: [3, 0.5, -Math.sqrt(3)],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_C_trees',
        position: [2, 0, 2 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_C_trees',
        position: [-2, 0, 2 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'mountain_C',
        position: [0, 0, 2 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [1, 1, 1.1 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_C_trees',
        position: [2, 0, -2 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_large',
        position: [0, 0.5, -2 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_small',
        position: [1.2, 1, -1.1 * Math.sqrt(3)],
        rotation: [0, (1 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [3, 0, 3 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [4, 0, 4 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [3, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-3, 0, 5 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [5, 0, 5 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-3, 0, 3 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-4, 0, 4 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-5, 0, 5 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-3, 0, -3 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-4, 0, -4 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-5, 0, -5 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [3, 0, -5 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'hills_B_trees',
        position: [-3.3, 0, -4.8 * Math.sqrt(3)],
        rotation: [0, (1.7 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [3.6, 0, -3 * Math.sqrt(3)],
        rotation: [0, (3 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [3.3, 0, -3.4 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'tree_single_A',
        position: [2.7, 0, -3.4 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [4, 0, -4 * Math.sqrt(3)],
        rotation: [0, (4 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [5, 0, -5 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_medium',
        position: [-9, 0, 1 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_large',
        position: [6, 0, 4 * Math.sqrt(3)],
        rotation: [0, (5 * -Math.PI) / 3, 0]
    },
    {
        model: 'trees_A_large',
        position: [9, 0, 1 * Math.sqrt(3)],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
    {
        model: 'building_tower_A_red',
        position: [9, 0, 3 * Math.sqrt(3)],
        rotation: [0, (2 * -Math.PI) / 3, 0]
    },
];

export default bigIslandProps;