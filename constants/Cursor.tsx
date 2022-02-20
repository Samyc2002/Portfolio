import dynamic from 'next/dynamic';

const DynamicCursor = dynamic(() => import('../components/Cursor'), { ssr: false });

const Cursor = () => {
    return <DynamicCursor 
        color="128, 0, 225"
        outerAlpha={0.3}
        innerSize={10}
        outerSize={16}
        outerScale={2}
        innerScale={0.7}
    />;
}

export default Cursor;