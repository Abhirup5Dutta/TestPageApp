import React from 'react'
import './PageBodyLeft.css';
import PageBodyLeftTop from './PageBodyLeftTop/PageBodyLeftTop';
import PageBodyLeftMiddle from './PageBodyLeftMiddle/PageBodyLeftMiddle';
import PageBodyLeftBottom from './PageBodyLeftBottom/PageBodyLeftBottom';

function PageBodyLeft() {
    return (
        <div className='pageBodyLeft'>
            <PageBodyLeftTop />
            <PageBodyLeftMiddle />
            <PageBodyLeftBottom />
        </div>
    )
}

export default PageBodyLeft
