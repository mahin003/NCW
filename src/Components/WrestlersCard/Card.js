import React, { useEffect } from 'react';
import man from '../../Data/data.json' ;
import Clubjoin from '../Club/Clubjoin';
import Wrestlers from '../WrestlersInfo/Wrestlers';
import {useState} from 'react';
import './Card.css';

const Card = () => {
    const [List,setList]= useState([]);
    const [wrestlers,setWrestlers]=useState([]);
    useEffect(() => {
        setWrestlers(man);
        console.log(wrestlers);
        }, []);

   
    const handleAddWrestlers=(man)=>{
        
        if(List.indexOf(man)==-1){
            const newList=[...List,man];
            console.log("added");
            setList(newList);
        }
        
    }
    //console.log(wrestlers);
    return (
        <div className="CardContainer">
            <div className="WrestlersCard">
                {
                    wrestlers.map(manInfo=><Wrestlers handleAddWrestlers={handleAddWrestlers} wrestlerInfo={manInfo}></Wrestlers>)
                }
            </div>
            <div className="ClubMember">
                <Clubjoin join={List}></Clubjoin>
            </div>
        </div>
    );
};

export default Card;