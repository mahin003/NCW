import React from 'react';
import './Wrestlers.css';
import { faFistRaised} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrestlers = (props) => {
    const { name,sallery,  picture, age, company }= props.wrestlerInfo;
    //console.log(name); 
    return (
        <div className="wrestlers border border-dark">
            <div>
                <img src={picture} alt=""/>
            </div>
            <div className="Info">
                 <p>Name: <b>{name}</b></p>
                <p>Age: {age}</p>
                 <p>Company: <b>{company}</b></p>
                 <p>Sallery for One match: <b>${sallery}</b></p>
                 <button className='main-button' onClick={()=>props.handleAddWrestlers(props.wrestlerInfo)}> <FontAwesomeIcon icon={faFistRaised} /> Select</button>
            </div>
        </div>
    );
};

export default Wrestlers;