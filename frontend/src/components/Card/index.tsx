import React, { FC } from 'react';
import './index.css';

type CardProps = {
    id: number;
    position: string;
    reason: string;
    state: string;
    created_at: string;
}

const Card:FC<CardProps> = ({ position, reason, created_at }) => {
    return (
        <div className='card-container'>
            <div className="card-position">{position}</div>
            <div className="card-reason">{reason}</div>
            <div className="card-created_at">{created_at}</div>
        </div>
    )
}
  
  export default Card