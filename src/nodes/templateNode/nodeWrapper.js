// node wrapper.js

// defines the structure of the nodes for consistent styling and layout
export const NodeWrapper = ({
    title,
    children,
    width = "200px",
    height = "80px",
    className = "",
    ...props
}) => {
    return (
        <div
            className={`border border-black p-2 rounded-lg shadow-md bg-white ${className}`}
            style={{ width, height }}
            {...props}
        >
            {title && (
                <div className="mb-2 bg-indigo-200">
                    <span className="font-medium">{title}</span>
                </div>
            )}
            <div className="flex-1 ">{children}</div>
        </div>
    );
};
