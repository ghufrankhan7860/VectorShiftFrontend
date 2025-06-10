import { useState } from "react";
import { Position } from "reactflow";
import { createNode } from "../templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "../templateNode/nodeControls";
import { useNodeState } from "../../hooks/useNodeState";

const APINodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: method,
        handleNameChange,
        handleVariantChange: handleMethodChange,
    } = useNodeState(id, data, "api");

    const [url, setUrl] = useState(data?.url || "");

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Method"
                value={method}
                onChange={handleMethodChange}
                options={[
                    { value: "GET", label: "GET" },
                    { value: "POST", label: "POST" },
                    { value: "PUT", label: "PUT" },
                    { value: "DELETE", label: "DELETE" },
                ]}
            />
            <NodeInput
                label="URL"
                value={url}
                onChange={handleUrlChange}
                placeholder="https://api.example.com"
            />
        </>
    );
};

export const APINode = createNode({
    title: "API",
    renderContent: APINodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-headers`,
            style: { top: "25%" },
        },
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-body`,
            style: { top: "75%" },
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-response`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
