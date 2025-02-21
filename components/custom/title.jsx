const Title = ({ content, styles }) => {
    return (
        <p
            className="text-2xl md:text-4xl font-bold"
            style={{
                ...styles
            }}
        >
            {content}
        </p>
    )
};

export default Title;
