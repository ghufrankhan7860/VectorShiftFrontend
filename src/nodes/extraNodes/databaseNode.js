import { useState } from "react";
import { Position } from "reactflow";
import { createNode } from "../templateNode/nodeFactory";
import {
    NodeInput,
    NodeSelect,
    NodeTextarea,
} from "../templateNode/nodeControls";

import { useNodeState } from "../../hooks/useNodeState";

const DatabaseNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: dbType,
        textContent: query,
        handleNameChange,
        handleVariantChange: handleTypeChange,
        handleTextChange: handleQueryChange,
    } = useNodeState(id, data, "database");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={dbType}
                onChange={handleTypeChange}
                options={[
                    { value: "MySQL", label: "MySQL" },
                    { value: "PostgreSQL", label: "PostgreSQL" },
                    { value: "MongoDB", label: "MongoDB" },
                ]}
            />
            <NodeTextarea
                label="Query"
                value={query}
                onChange={handleQueryChange}
                rows={2}
                placeholder="SELECT * FROM..."
            />
        </>
    );
};

export const DatabaseNode = createNode({
    title: "Database",
    renderContent: DatabaseNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-query`,
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-result`,
        },
    ],
    dimensions: { width: "220px", height: "auto" },
});
