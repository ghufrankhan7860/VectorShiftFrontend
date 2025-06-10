// // toolbar.js

// import { type } from "@testing-library/user-event/dist/type";
// import { DraggableNode } from "./draggableNode";

// export const PipelineToolbar = () => {
//     const nodeTypes = [
//         { type: "customInput", label: "Input" },
//         { type: "llm", label: "LLM" },
//         { type: "customOutput", label: "Output" },
//         { type: "text", label: "Text" },
//         { type: "database", label: "Database" },
//         { type: "api", label: "API" },
//         { type: "filter", label: "Filter" },
//         { type: "transform", label: "Transform" },
//         { type: "notification", label: "Notification" },
//     ];
//     return (
//         <div className="p-[10px] pb-5 bg-indigo-200 text-white shadow-md rounded-b-lg">
//             <div
//                 style={{
//                     marginTop: "20px",
//                     display: "flex",
//                     flexWrap: "wrap",
//                     gap: "10px",
//                 }}
//             >
//                 {nodeTypes.map((node) => (
//                     <DraggableNode
//                         key={node.type}
//                         type={node.type}
//                         label={node.label}
//                     />
//                 ))}

//                 {/* <DraggableNode type="customInput" label="Input" />
//                 <DraggableNode type="llm" label="LLM" />
//                 <DraggableNode type="customOutput" label="Output" />
//                 <DraggableNode type="text" label="Text" /> */}
//             </div>
//         </div>
//     );
// };

//--------------------------------------------------------------
// after adding icons to the draggable nodes

import { DraggableNode } from "./draggableNode";

import {
    FiUpload, 
    FiCpu, 
    FiDownload, 
    FiFileText, 
    FiDatabase, 
    FiGlobe, 
    FiFilter, 
    FiRefreshCw, 
    FiBell, 
} from "react-icons/fi";

export const PipelineToolbar = () => {
    const nodeTypes = [
        {
            type: "customInput",
            label: "Input",
            icon: FiUpload,
        },
        {
            type: "llm",
            label: "LLM",
            icon: FiCpu, 
        },
        {
            type: "customOutput",
            label: "Output",
            icon: FiDownload,
        },
        {
            type: "text",
            label: "Text",
            icon: FiFileText,
        },
        {
            type: "database",
            label: "Database",
            icon: FiDatabase,
        },
        {
            type: "api",
            label: "API",
            icon: FiGlobe,
        },
        {
            type: "filter",
            label: "Filter",
            icon: FiFilter,
        },
        {
            type: "transform",
            label: "Transform",
            icon: FiRefreshCw,
        },
        {
            type: "notification",
            label: "Notification",
            icon: FiBell,
        },
    ];

    return (
        <div className="p-[10px] pb-5 bg-indigo-200 text-white shadow-md rounded-b-lg">
            <div className="mt-[10px] flex flex-wrap gap-[10px] justify-start">
                {nodeTypes.map((node) => (
                    <DraggableNode
                        key={node.type}
                        type={node.type}
                        label={node.label}
                        icon={node.icon}
                    />
                ))}
            </div>
        </div>
    );
};
