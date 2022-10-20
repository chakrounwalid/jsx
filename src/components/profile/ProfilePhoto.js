import React from "react";
import walidimg from '../image/123.jpg';
function ProfilePhoto() {
    return(
        <div >
            <img src={walidimg} alt='photo de profil' style={{width:"250px", borderRadius:"10%",boxShadow:"10px 10px 5px black"}}></img>
            <h1 style={{color:"brown"}}><i>Walid Chakroun </i></h1>
        </div>
    )
    
}
export default ProfilePhoto