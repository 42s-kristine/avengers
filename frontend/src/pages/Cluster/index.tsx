import React from 'react';
import axios from 'axios';
import './index.css';

const Cluster = () => {
    const cluster_data = [
        {
            'position' : 'c1r1s1',
            'reachable' : true,
            'repair': [
                {
                    'reported_at' : '2022-01-21',
                    'state' : 'done',
                    'repaired_at' : '2022-02-01'
                }
            ]
        },
        {
            'position' : 'c1r1s2',
            'reachable' : false,
            'repair': [
                {
                    'reported_at' : '2022-01-25',
                    'state' : 'in progress',
                    'repaired_at' : null
                }
            ]
        }
    ]
    return (
        <div className="cluster-container">
            cluster
            {cluster_data.map(position => {
                return <li>{position.position}</li>
            })}
        </div>
    );
}

export default Cluster;