import React from 'react';
import axios from 'axios';

const Cluster = () => {
    const cluster_list = ['c1r1s1', 'c1r2s1']
    return (
        <div>
            cluster
            {cluster_list.map(position => {
                return <li>{position}</li>
            })}
        </div>
    );
}

export default Cluster;