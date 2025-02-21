const Text = ({ content, styles }) => {
    return (
        <p
            className="text-xl md:text-2xl"
            style={{
                ...styles
            }}
        >
            {content}
        </p>
    )
};

export default Text;
