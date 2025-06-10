// store.js

import { create } from "zustand";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
} from "reactflow";

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {}, // earlier nodeIDs was not declared -> i have added this

    // action : reducer
    getNodeID: (type) => {
        const newIDs = { ...get().nodeIDs };
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({ nodeIDs: newIDs });
        return `${type}-${newIDs[type]}`;
    },
    addNode: (node) => {
        set({
            nodes: [...get().nodes, node],
        });
    },
    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    onConnect: (connection) => {
        set({
            edges: addEdge(
                {
                    ...connection,
                    type: "smoothstep",
                    animated: true,
                    markerEnd: {
                        type: MarkerType.Arrow,
                        height: "20px",
                        width: "20px",
                    },
                },
                get().edges
            ),
        });
    },
    updateNodeField: (nodeId, fieldName, fieldValue) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    node.data = { ...node.data, [fieldName]: fieldValue };
                }

                return node;
            }),
        });
    },

    // debug function to log nodeIDs
    logNodeIDs: () => {
        console.log("NodeIDs:", get().nodeIDs);
    },

    // handleNewNodes for inputVariableNodes Fn
    // store.js
    addVariableConnection: (nodeId, variableName, inputNodeId) => {
        set((state) => ({
            nodes: state.nodes.map(node => {
                if (node.id === nodeId) {
                    const existingConnections = node.data?.variableConnections || [];
                    const newConnection = {
                        variableName,
                        inputNodeId,
                        handleId: `${nodeId}-${variableName}-input`
                    };
                    return {
                        ...node,
                        data: {
                            ...node.data,
                            variableConnections: [
                                ...existingConnections.filter(c => c.variableName !== variableName),
                                newConnection
                            ]
                        }
                    };
                }
                return node;
            })
        }));
    },
    createVariableEdge: (sourceNodeId, targetNodeId, targetHandleId) => {
        const newEdge = {
            id: `${sourceNodeId}-${targetNodeId}-${Date.now()}`,
            source: sourceNodeId,
            target: targetNodeId,
            targetHandle: targetHandleId,
            type: "smoothstep",
            animated: true,
        };
        set((state) => ({
            edges: [...state.edges, newEdge]
        }));
    },
}));
