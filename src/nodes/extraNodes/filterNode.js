import { useState } from "react";
import { Position } from "reactflow";
import { createNode } from "../templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "../templateNode/nodeControls";

import { useNodeState } from "../../hooks/useNodeState";

const FilterNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: operator,
        handleNameChange,
        handleVariantChange: handleOperatorChange,
    } = useNodeState(id, data, "filter");

    const [value, setValue] = useState(data?.value || "");

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Operator"
                value={operator}
                onChange={handleOperatorChange}
                options={[
                    { value: "equals", label: "Equals" },
                    { value: "contains", label: "Contains" },
                    { value: "greater", label: "Greater Than" },
                    { value: "less", label: "Less Than" },
                ]}
            />
            <NodeInput
                label="Value"
                value={value}
                onChange={handleValueChange}
                placeholder="Filter value"
            />
        </>
    );
};

export const FilterNode = createNode({
    title: "Filter",
    renderContent: FilterNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-input`,
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-match`,
            style: { top: "35%" },
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-nomatch`,
            style: { top: "65%" },
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
