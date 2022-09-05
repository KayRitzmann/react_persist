export interface DataTO {
    id: string,
    parent?: string,
    label: string,
    contains: number,
    icon?: string,
    type: string,
    target?: string
}
export interface NodeDataTO {
    id: string,
    label: string,
    contains: number,
    iconCode?: string,
    targets: string[],
    childs: {
        id: string,
        label: string,
        contains: number,
        targets: {
            containerNode: string,
            subNodes: string[]
        }[]
    }
}
export const data: DataTO[] = [
    {
        "id": "56ba7d93-b516-416c-a222-3dda3cb511c1",
        "parent": undefined,
        "label": "Wareneingang",
        "contains": 0,
        "icon": "EingangsIcon",
        "type": "parent",
        "target": "a191a5a2-a324-463f-9360-d2f9a4fa7df9"
    },
    {
        "id": "a191a5a2-a324-463f-9360-d2f9a4fa7df9",
        "parent": undefined,
        "label": "Transport",
        "contains": 0,
        "icon": "TransportIcon",
        "type": "parent",
        "target": "a191a5a2-a324-463f-9360-d2f9a4fa7df9"
    },
    {
        "id": "a191a5a2-a324-463f-9360-d2f9a4fa7df9",
        "parent": undefined,
        "label": "Warenausgang",
        "contains": 0,
        "icon": "",
        "type": "parent",
        "target": undefined
    },
    {
        "id": "edbe9c05-5600-4a0c-a2de-168a9d711249",
        "parent": "56ba7d93-b516-416c-a222-3dda3cb511c1",
        "label": "QM",
        "contains": 0,
        "icon": undefined,
        "type": "child",
        "target": "b5c3cd75-5b63-4b52-a45b-c21e0379929c"
    },
    {
        "id": "edbe9c05-5600-4a0c-a2de-168a9d711249",
        "parent": "56ba7d93-b516-416c-a222-3dda3cb511c1",
        "label": "QM",
        "contains": 0,
        "icon": undefined,
        "type": "child",
        "target": "d59334bf-8429-4858-8931-eb734a7e97f5"
    },
    {
        "id": "b5c3cd75-5b63-4b52-a45b-c21e0379929c",
        "parent": "a191a5a2-a324-463f-9360-d2f9a4fa7df9",
        "label": "StaplerA",
        "contains": 0,
        "icon": undefined,
        "type": "child",
        "target": "a7e0408e-7548-4dd0-a4fa-08efa9a30932"
    },
    {
        "id": "d59334bf-8429-4858-8931-eb734a7e97f5",
        "parent": "a191a5a2-a324-463f-9360-d2f9a4fa7df9",
        "label": "StaplerB",
        "contains": 0,
        "icon": undefined,
        "type": "child",
        "target": "a7e0408e-7548-4dd0-a4fa-08efa9a30932"
    },
    {
        "id": "a7e0408e-7548-4dd0-a4fa-08efa9a30932",
        "parent": "a191a5a2-a324-463f-9360-d2f9a4fa7df9",
        "label": "Verkaufsstelle",
        "contains": 0,
        "icon": undefined,
        "type": "child",
        "target": undefined
    }
]
