import React from 'react';
import './Clubjoin.css';

const Clubjoin = (props) => {
    //console.log(props," ",props.join.length);
    console.log("name ",props.join);
    const total = props.join.reduce((total,match) =>total+match.sallery,0);
    console.log(total," ttl ");
    return (
        <div>
            <h5 className="border border-bottom"> Selected Wrestlers: {props.join.length}</h5>
            {
            props.join.map(man=><p><b>{man.name}</b><br/>Fees for one match : ${man.sallery}</p>)
            }
            
            <h5>Total Price: ${total}</h5>
        </div>
    );
};

export default Clubjoin;