import { useEffect } from "react";

function Even(){
    useEffect(() => {
        return () =>{
            console.log("Even component unmounting");
        }
    }, []);

    return <div>현재 카운트는 짝수</div>
}

export default Even;