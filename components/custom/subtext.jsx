const SubText = ({ content, styles, children }) => {
    return (
        <p
            className="text-lg md:text-xl"
            style={{
                color: "#828282",
                ...styles
            }}
        >
            {content}
            {children}
        </p>
    )
};

export default SubText;
