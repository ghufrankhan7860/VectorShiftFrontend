import { useState } from "react";
import { Position } from "reactflow";
import { createNode } from "../templateNode/nodeFactory";
import { NodeInput, NodeSelect } from "../templateNode/nodeControls";

import { useNodeState } from "../../hooks/useNodeState";

const NotificationNodeContent = ({ id, data }) => {
    const {
        currName,
        nodeVariant: notificationType,
        handleNameChange,
        handleVariantChange: handleTypeChange,
    } = useNodeState(id, data, "notification");

    const [recipient, setRecipient] = useState(data?.recipient || "");
    const [message, setMessage] = useState(data?.message || "");

    const handleRecipientChange = (e) => {
        setRecipient(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <NodeInput
                label="Name"
                value={currName}
                onChange={handleNameChange}
            />
            <NodeSelect
                label="Type"
                value={notificationType}
                onChange={handleTypeChange}
                options={[
                    { value: "Email", label: "Email" },
                    { value: "SMS", label: "SMS" },
                    { value: "Slack", label: "Slack" },
                    { value: "Discord", label: "Discord" },
                ]}
            />
            <NodeInput
                label="Recipient"
                value={recipient}
                onChange={handleRecipientChange}
                placeholder="user@example.com"
            />
            <NodeInput
                label="Message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Notification message"
            />
        </>
    );
};

export const NotificationNode = createNode({
    title: "Notification",
    renderContent: NotificationNodeContent,
    handles: [
        {
            type: "target",
            position: Position.Left,
            id: (id) => `${id}-trigger`,
        },
        {
            type: "source",
            position: Position.Right,
            id: (id) => `${id}-sent`,
        },
    ],
    dimensions: { width: "200px", height: "auto" },
});
