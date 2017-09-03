const GIGANTIC_TEST_DATA_FILE = {
    heroes: [
        { id: 1, name: "Tyto", description: "description", imageUrl: "imageUrl"},
    ],
    entities: {
        heroes: {
            "1": { name: "Tyto", description: "description", imageUrl: "imageUrl"},
        },
        abilities: {
            "1": { heroId: "1", name: "Jump"}
        },
        upgrades: {
            "1": { abilityId: "1", name: "Ice Cold", tier: 1},
            "2": { abilityId: "1", name: "Super Ice Blaster", parentId: "1", tier: 2},
        }

    },

    // heroes: [
    //     {
    //         name: "Tyto",
    //         imageUrl: "",
    //         abilities: [
    //             {
    //                 name: "",
    //                 description: "",
    //                 upgrades: [
    //                     {
    //                         name: "",
    //                         tier: "1",
    //                     },
    //                     {
    //                         name: "",
    //                         tier: "2",
    //                         description: "asds",
    //                     }
    //                 ]

                    
    //             }
    //         ]
    //     }
    // ]
};

export default GIGANTIC_TEST_DATA_FILE;