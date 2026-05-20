const tree = {
    name: 'John',
    children: [
        {
            name: "Jim",
            children: []
        },
        {
            name: 'Tommy',
            children: [
                {
                    name: "Paul",
                    children: [
                        {
                            name: "Peter",
                            children: [{
                                name: "peters kind",
                                children:[]
                            }]
                        },
                    ]
                },
                {
                    name: "Sarah",
                    children: []
                }
            ]
        }
    ],
}

function printChildrenRecursive(t){
    // guard clause => prüfen ob etwas nicht vorhanden, dann recursion abbrechen
    if(t?.children?.length === 0){
        console.log(`${t.name} hat keine Kinder`)
        return
    }

    //optional string falls children property fehlen, damit funciton nicht crashed
    t?.children?.forEach(child => {
        console.log(`${child.name} ist Kind von ${t.name}`)
        printChildrenRecursive(child)

    })
}

printChildrenRecursive(tree)