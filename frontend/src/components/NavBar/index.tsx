import React from 'react';
import './index.css';

const NavBar = () => {
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
        <div className='nav-container'>
            안녕하세요
        </div>
    )
}
  
  export default NavBar;