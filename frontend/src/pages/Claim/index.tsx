import React from 'react';
import { ReactComponent as Cluster } from '../../static/svg/clusters/c1_seoul.svg';
import './index.css';

const Claim = () => {

    return (
        <>
            <div className='claims-container'>
                <div className='claims'>
                    claims
                </div>
                <div className='claims in-progress'>
                    claims-in-progress
                </div>
                <div className='claims finish'>
                    claims-finish
                </div>
            </div>
            <div className="clusters-container">
                <div className="cluster-img">
                    <Cluster />
                </div>
            </div>
        </>
    );
};

export default Claim;