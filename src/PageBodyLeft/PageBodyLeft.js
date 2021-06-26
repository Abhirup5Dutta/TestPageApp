import React from 'react'
import './PageBodyLeft.css';
import PageBodyLeftTop from './PageBodyLeftTop/PageBodyLeftTop';
import PageBodyLeftMiddle from './PageBodyLeftMiddle/PageBodyLeftMiddle';
import PageBodyLeftBottom from './PageBodyLeftBottom/PageBodyLeftBottom';
import PageHeaderLeft from './PageHeaderLeft/PageHeaderLeft';
import PageRightBody from '../PageBodyRight/PageRightBody/PageRightBody';

function PageBodyLeft() {
    return (
        <div className='pageBodyLeft'>
            <PageHeaderLeft />
            <PageBodyLeftTop />
            <PageBodyLeftMiddle />
            <PageBodyLeftBottom />
            <div className="toggle">
                <PageRightBody />
            </div>
        </div>
    )
}

export default PageBodyLeft
