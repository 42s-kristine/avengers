import React from 'react';
import Card from '../../components/Card';
import './index.css';

const Claim = () => {
    const claimData = [
        {
            id: 0,
            position: "c1r1s1",
            reason: "화면고장",
            state: "todo",
            created_at: "2022-02-02"
        },
        {
            id: 1,
            position: "c2r2s2",
            reason: "키보드 고장",
            state: "in_progress",
            created_at: "2022-02-01"
        },
        {
            id: 2,
            position: "c3r3s3",
            reason: "화면고장",
            state: "finish",
            created_at: "2022-02-01"
        },
    ]
    return (
        <>
            <div className='claims-container'>
                <div className='claims'>
                    <div>claims</div>
                    {
                        claimData.map((item) => {
                            if (item.state === "todo") {
                                return <Card key={item.id} {...item} />
                            }
                            else return null
                        })
                    }
                </div>
                <div className='claims in-progress'>
                    <div>claims-in-progress</div>
                    {
                        claimData.map((item) => {
                            if (item.state === "in_progress") {
                                return <Card key={item.id} {...item} />
                            }
                            else return null
                        })
                    }
                </div>
                <div className='claims finish'>
                   <div>claims-finish</div>
                   {
                        claimData.map((item) => {
                            if (item.state === "finish") {
                                return <Card key={item.id} {...item} />
                            }
                            else return null
                        })
                    }
                </div>
            </div>
        </>
    );
};

export default Claim;