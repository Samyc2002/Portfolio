const LinkText = ({ content, styles, children }) => {
    return (
        <p
            style={{
                fontSize: "18px",
                ...styles
            }}
        >
            {content}
            {children}
        </p>
    )
};

export default LinkText;
