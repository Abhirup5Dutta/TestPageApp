import React from 'react'
import PageBodyLeft from '../PageBodyLeft/PageBodyLeft';
import PageBodyRight from '../PageBodyRight/PageBodyRight';
import './Page.css';

function Page() {
    return (
        <div className='page'>
            <div className="pageLeft">
                <PageBodyLeft />
            </div>
            <div className="pageRight">
                <PageBodyRight />
            </div>
        </div>
    )
}

export default Page
