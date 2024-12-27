import React from "react";
const StringConcat = ({user}) => {
    
    return (
        <div>
            <h1>{user.name}</h1>
            <img src={user.imageUrl} alt="" />
        </div>


    )
}
export default StringConcat