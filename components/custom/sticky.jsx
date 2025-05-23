const Sticky = ({children}) => {
    return (
        <div className="sticky top-5 md:top-4 z-10 w-fit">
            {children}
        </div>
    )
};

export default Sticky;
