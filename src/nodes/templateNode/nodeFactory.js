import React from "react";
import { Handle, Position } from "reactflow";
import { NodeWrapper } from "./nodeWrapper";

export const createNode = ({
    title,
    renderContent,
    handles = [],
    dimensions = { width: "200px", height: "80px" },
    className = "",
}) => {
    return ({ id, data }) => {
        const content = renderContent ? renderContent({ id, data }) : null;

        return (
            <NodeWrapper
                title={title}
                width={dimensions.width}
                height={dimensions.height}
                className={className}
            >
                {content}
                {handles.map((handle, index) => (
                    <Handle
                        key={index}
                        type={handle.type}
                        position={handle.position}
                        id={handle.id ? handle.id(id) : undefined}
                        style={handle.style}
                    />
                ))}
            </NodeWrapper>
        );
    };
};

// Predefined handle configurations
export const HANDLE_CONFIGS = {
    SOURCE_RIGHT: (id, suffix = "value") => ({
        type: "source",
        position: Position.Right,
        id: `${id}-${suffix}`,
    }),
    TARGET_LEFT: (id, suffix = "input") => ({
        type: "target",
        position: Position.Left,
        id: `${id}-${suffix}`,
    }),
};
