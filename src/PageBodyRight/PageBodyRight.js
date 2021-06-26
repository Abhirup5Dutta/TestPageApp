import React from 'react'
import './PageBodyRight.css';
import PageRightHeader from './PageRightHeader/PageRightHeader';
import PageRightBody from './PageRightBody/PageRightBody';

function PageBodyRight() {
    return (
        <div className="pageRightdisp">
            <div className="right__head">
                <PageRightHeader />
            </div>
            <div className="right__body">
                <PageRightBody />
            </div>
        </div>
    )
}

export default PageBodyRight
