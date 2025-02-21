const Sticky = ({children}) => {
    return (
        <div className="sticky top-5 md:top-4 z-10">
            {children}
        </div>
    )
};

export default Sticky;
