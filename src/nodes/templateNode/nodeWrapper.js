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
            className={`border border-indigo-200 p-2 rounded-lg shadow-md bg-white ${className}`}
            style={{ width, height }}
            {...props}
        >
            {title && (
                <div className="mb-2 bg-indigo-200 p-0.5 rounded text-center">
                    <span className="text-sm text-indigo-800">{title}</span>
                </div>
            )}
            <div className="flex-1 ">{children}</div>
        </div>
    );
};
