import { useState } from "react";
import { Position } from "reactflow";
import { createNode } from "../templateNode/nodeFactory";
import {
    NodeInput,
    NodeSelect,
    NodeTextarea,
} from "../templateNode/nodeControls";

import { useNodeState } from "../../hooks/useNodeState";

const TransformNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: transformType,
        textContent: script,
        handleNameChange,
        handleVariantChange: handleTypeChange,
        handleTextChange: handleScriptChange,
    } = useNodeState(id, data, "transform");

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={transformType}
                onChange={handleTypeChange}
                options={[
                    { value: "JavaScript", label: "JavaScript" },
                    { value: "Python", label: "Python" },
                    { value: "JSONPath", label: "JSONPath" },
                ]}
            />
            <NodeTextarea
                label="Script"
                value={script}
                onChange={handleScriptChange}
                rows={3}
                placeholder="// Transform logic here"
            />
        </>
    );
};

export const TransformNode = createNode({
    title: "Transform",
    renderContent: TransformNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-input`,
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-output`,
        },
    ],
    dimensions: { width: "220px", height: "auto" },
});
    