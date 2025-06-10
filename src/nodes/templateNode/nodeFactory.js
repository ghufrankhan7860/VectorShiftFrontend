// import React from "react";
// import { Handle, Position } from "reactflow";
// import { NodeWrapper } from "./nodeWrapper";

// export const createNode = ({
//     title,
//     renderContent,
//     handles = [],
//     dimensions = { width: "200px", height: "80px" },
//     className = "",
// }) => {
//     return ({ id, data }) => {
//         const content = renderContent ? renderContent({ id, data }) : null;

//         return (
//             <NodeWrapper
//                 title={title}
//                 width={dimensions.width}
//                 height={dimensions.height}
//                 className={className}
//             >
//                 {content}
//                 {handles.map((handle, index) => (
//                     <Handle
//                         key={index}
//                         type={handle.type}
//                         position={handle.position}
//                         id={handle.id ? handle.id(id) : undefined}
//                         style={handle.style}
//                     />
//                 ))}
//             </NodeWrapper>
//         );
//     };
// };

// // Predefined handle configurations
// export const HANDLE_CONFIGS = {
//     SOURCE_RIGHT: (id, suffix = "value") => ({
//         type: "source",
//         position: Position.Right,
//         id: `${id}-${suffix}`,
//     }),
//     TARGET_LEFT: (id, suffix = "input") => ({
//         type: "target",
//         position: Position.Left,
//         id: `${id}-${suffix}`,
//     }),
// };

// ----------------------------------------------------------
// after changing the handle style color and size for each node
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

        // Default handle styles
        const getHandleStyle = (handle) => {
            const baseStyle = {
                width: "10px",
                height: "10px",
                border: "1px solid #fff",
                borderRadius: "50%",
                ...handle.style, // Allow custom styles to override
            };

            // Add color based on handle type
            if (handle.type === "source") {
                baseStyle.backgroundColor = "#A5D6A7";
            } else if (handle.type === "target") {
                baseStyle.backgroundColor = "#9FA8DA";
            }

            return baseStyle;
        };

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
                        style={getHandleStyle(handle)}
                    />
                ))}
            </NodeWrapper>
        );
    };
};

// Predefined handle configurations with custom colors
export const HANDLE_CONFIGS = {
    SOURCE_RIGHT: (id, suffix = "value", color = "#10b981") => ({
        type: "source",
        position: Position.Right,
        id: `${id}-${suffix}`,
        style: { backgroundColor: color },
    }),
    TARGET_LEFT: (id, suffix = "input", color = "#3b82f6") => ({
        type: "target",
        position: Position.Left,
        id: `${id}-${suffix}`,
        style: { backgroundColor: color },
    }),
};
