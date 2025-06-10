// import { useState } from "react";

// export const useNodeState = (id, data, nodeType = "input") => {
//     // Generate default name based on node type and id
//     const generateDefaultName = () => {
//         // Extract number from id (e.g., "customInput-1" -> "1")
//         const match = id.match(/(\d+)$/);
//         const nodeNumber = match ? match[1] : "1";

//         // Handle different node types
//         switch (nodeType) {
//             case "input":
//                 return `input_${nodeNumber}`;
//             case "output":
//                 return `output_${nodeNumber}`;
//             case "llm":
//                 return `llm_${nodeNumber}`;
//             case "text":
//                 return `text_${nodeNumber}`;
//             default:
//                 return `${nodeType}_${nodeNumber}`;
//         }
//     };

//     // Handle different data property names for different node types
//     const getInitialName = () => {
//         if (data?.inputName) return data.inputName;
//         if (data?.outputName) return data.outputName;
//         if (data?.name) return data.name;

//         // Fallback to original logic for backwards compatibility
//         if (nodeType === "input" && id.includes("customInput-")) {
//             return id.replace("customInput-", "input_");
//         }
//         if (nodeType === "output" && id.includes("customOutput-")) {
//             return id.replace("customOutput-", "output_");
//         }

//         return generateDefaultName();
//     };

//     // State for node name
//     const [currName, setCurrName] = useState(getInitialName());

//     // State for node type/variant (for input nodes: Text/File, for LLM nodes: OpenAI/Anthropic, etc.)
//     const [nodeVariant, setNodeVariant] = useState(() => {
//         if (data?.inputType) return data.inputType;
//         if (data?.outputType) return data.outputType;
//         if (data?.llmType) return data.llmType;
//         if (data?.type) return data.type;
//         return getDefaultVariant(nodeType);
//     });

//     // State for text content (for text nodes or nodes with text areas)
//     const [textContent, setTextContent] = useState(data?.text || "");

//     // Common event handlers
//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleVariantChange = (e) => {
//         setNodeVariant(e.target.value);
//     };

//     const handleTextChange = (e) => {
//         setTextContent(e.target.value);
//     };

//     return {
//         // State values
//         currName,
//         nodeVariant,
//         textContent,

//         // State setters (for direct manipulation if needed)
//         setCurrName,
//         setNodeVariant,
//         setTextContent,

//         // Event handlers
//         handleNameChange,
//         handleVariantChange,
//         handleTextChange,
//     };
// };

// // Helper function to get default variant based on node type
// const getDefaultVariant = (nodeType) => {
//     switch (nodeType) {
//         case "input":
//             return "Text";
//         case "output":
//             return "Text";
//         case "llm":
//             return ["OpenAI", "Anthropic"][Math.floor(Math.random() * 2)];
//         case "text":
//             return "Text";
//         default:
//             return "Text";
//     }
// };

// // Specific hooks for each node type for convenience
// export const useInputNodeState = (id, data) => useNodeState(id, data, "input");
// export const useOutputNodeState = (id, data) =>
//     useNodeState(id, data, "output");
// export const useLLMNodeState = (id, data) => useNodeState(id, data, "llm");
// export const useTextNodeState = (id, data) => useNodeState(id, data, "text");

//
//
//
//
//
//
// //-------------------------------------------------------------------`
// // updated nodeSTate afte creating outputNode LLM node and TextNode
// import { useState } from "react";

// export const useNodeState = (id, data, nodeType = "input") => {
//     // Generate default name based on node type and id
//     const generateDefaultName = () => {
//         // Extract number from id (e.g., "customInput-1" -> "1")
//         const match = id.match(/(\d+)$/);
//         const nodeNumber = match ? match[1] : "1";

//         // Handle different node types
//         switch (nodeType) {
//             case "input":
//                 return `input_${nodeNumber}`;
//             case "output":
//                 return `output_${nodeNumber}`;
//             case "llm":
//                 return `llm_${nodeNumber}`;
//             case "text":
//                 return `text_${nodeNumber}`;
//             default:
//                 return `${nodeType}_${nodeNumber}`;
//         }
//     };

//     // Handle different data property names for different node types
//     const getInitialName = () => {
//         if (data?.inputName) return data.inputName;
//         if (data?.outputName) return data.outputName;
//         if (data?.name) return data.name;

//         // Fallback to original logic for backwards compatibility
//         if (nodeType === "input" && id.includes("customInput-")) {
//             return id.replace("customInput-", "input_");
//         }
//         if (nodeType === "output" && id.includes("customOutput-")) {
//             return id.replace("customOutput-", "output_");
//         }
//         if (nodeType === "llm" && id.includes("customLLM-")) {
//             return id.replace("customLLM-", "llm_");
//         }
//         if (nodeType === "text" && id.includes("customText-")) {
//             return id.replace("customText-", "text_");
//         }

//         return generateDefaultName();
//     };

//     // State for node name
//     const [currName, setCurrName] = useState(getInitialName());

//     // State for node type/variant
//     const [nodeVariant, setNodeVariant] = useState(() => {
//         if (data?.inputType) return data.inputType;
//         if (data?.outputType) return data.outputType;
//         if (data?.llmType) return data.llmType;
//         if (data?.type) return data.type;
//         return getDefaultVariant(nodeType);
//     });

//     // State for text content
//     const [textContent, setTextContent] = useState(data?.text || "");

//     // Common event handlers
//     const handleNameChange = (e) => {
//         setCurrName(e.target.value);
//     };

//     const handleVariantChange = (e) => {
//         setNodeVariant(e.target.value);
//     };

//     const handleTextChange = (e) => {
//         setTextContent(e.target.value);
//     };

//     return {
//         // State values
//         currName,
//         nodeVariant,
//         textContent,

//         // State setters
//         setCurrName,
//         setNodeVariant,
//         setTextContent,

//         // Event handlers
//         handleNameChange,
//         handleVariantChange,
//         handleTextChange,
//     };
// };

// // Helper function to get default variant based on node type
// const getDefaultVariant = (nodeType) => {
//     switch (nodeType) {
//         case "input":
//             return "Text";
//         case "output":
//             return "Text";
//         case "llm":
//             return "OpenAI";
//         case "text":
//             return "Text";
//         default:
//             return "Text";
//     }
// };

//
//------------------------------------------------------------------
//
// updated useNodeState after adding extraNodes
import { useState } from "react";

export const useNodeState = (id, data, nodeType = "input") => {
    // Generate default name based on node type and id
    const generateDefaultName = () => {
        const match = id.match(/(\d+)$/);
        const nodeNumber = match ? match[1] : "1";

        switch (nodeType) {
            case "input":
                return `input_${nodeNumber}`;
            case "output":
                return `output_${nodeNumber}`;
            case "llm":
                return `llm_${nodeNumber}`;
            case "text":
                return `text_${nodeNumber}`;
            case "database":
                return `database_${nodeNumber}`;
            case "api":
                return `api_${nodeNumber}`;
            case "filter":
                return `filter_${nodeNumber}`;
            case "transform":
                return `transform_${nodeNumber}`;
            case "notification":
                return `notification_${nodeNumber}`;
            default:
                return `${nodeType}_${nodeNumber}`;
        }
    };

    // Handle different data property names for different node types
    const getInitialName = () => {
        if (data?.inputName) return data.inputName;
        if (data?.outputName) return data.outputName;
        if (data?.name) return data.name;

        // Fallback logic for all node types
        const typeMap = {
            input: "customInput-",
            output: "customOutput-",
            llm: "customLLM-",
            text: "customText-",
            database: "customDatabase-",
            api: "customAPI-",
            filter: "customFilter-",
            transform: "customTransform-",
            notification: "customNotification-",
        };

        const prefix = typeMap[nodeType];
        if (prefix && id.includes(prefix)) {
            return id.replace(prefix, `${nodeType}_`);
        }

        return generateDefaultName();
    };

    // State for node name
    const [currName, setCurrName] = useState(getInitialName());

    // State for node type/variant
    const [nodeVariant, setNodeVariant] = useState(() => {
        if (data?.inputType) return data.inputType;
        if (data?.outputType) return data.outputType;
        if (data?.llmType) return data.llmType;
        if (data?.type) return data.type;
        return getDefaultVariant(nodeType);
    });

    // State for text content
    const [textContent, setTextContent] = useState(data?.text || "");

    // Common event handlers
    const handleNameChange = (e) => {
        setCurrName(e.target.value);
    };

    const handleVariantChange = (e) => {
        setNodeVariant(e.target.value);
    };

    const handleTextChange = (e) => {
        setTextContent(e.target.value);
    };

    return {
        currName,
        nodeVariant,
        textContent,
        setCurrName,
        setNodeVariant,
        setTextContent,
        handleNameChange,
        handleVariantChange,
        handleTextChange,
    };
};

// Helper function to get default variant based on node type
const getDefaultVariant = (nodeType) => {
    switch (nodeType) {
        case "input":
        case "output":
        case "text":
            return "Text";
        case "llm":
            return "OpenAI";
        case "database":
            return "MySQL";
        case "api":
            return "GET";
        case "filter":
            return "equals";
        case "transform":
            return "JavaScript";
        case "notification":
            return "Email";
        default:
            return "Text";
    }
};
