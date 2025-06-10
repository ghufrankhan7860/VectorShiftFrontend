// // draggableNode.js

// // original draggable items bg color -> bg-[#1C2536]

// export const DraggableNode = ({ type, label }) => {
//     const onDragStart = (event, nodeType) => {
//         const appData = { nodeType };
//         event.target.style.cursor = "grabbing";
//         event.dataTransfer.setData(
//             "application/reactflow",
//             JSON.stringify(appData)
//         );
//         event.dataTransfer.effectAllowed = "move";
//     };

//     return (
//         <div
//             className={`${type} cursor-grab min-w-[80px] h-[60px] flex items-center rounded-lg bg-white justify-center flex-col p-3 shadow-md`}
//             onDragStart={(event) => onDragStart(event, type)}
//             onDragEnd={(event) => (event.target.style.cursor = "grab")}
//             draggable="true"
//         >
//             <span className="text-black font-medium ">{label}</span>
//         </div>
//     );
// };

//--------------------------------------------------------------------
// draggableNode.js
// draggable nodes after adding icons to their respective components
export const DraggableNode = ({ type, label, icon: Icon }) => {
    const onDragStart = (event, nodeType) => {
        const appData = { nodeType };
        event.target.style.cursor = "grabbing";
        event.dataTransfer.setData(
            "application/reactflow",
            JSON.stringify(appData)
        );
        event.dataTransfer.effectAllowed = "move";
    };

    return (
        <div
            className={`${type} cursor-grab min-w-[80px] h-[60px] flex items-center rounded-lg bg-white justify-center flex-col p-3 shadow-md`}
            onDragStart={(event) => onDragStart(event, type)}
            onDragEnd={(event) => (event.target.style.cursor = "grab")}
            draggable="true"
        >
            {Icon && <Icon className="text-gray-600 mb-1" size={20} />}
            <span className="text-black text-sm">{label}</span>
        </div>
    );
};
