const Viewer = (props) => {
    const {count,name} = props;
    return (
        <div>
            <div>현재 카운트 : </div>
            <h1>{count}</h1>
            <h1>{name}</h1>
        </div>
    );
};
export default Viewer;