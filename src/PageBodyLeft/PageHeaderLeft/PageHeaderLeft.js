import React from 'react'
import './PageHeaderLeft.css';
import PageRightHeader from '../../PageBodyRight/PageRightHeader/PageRightHeader';

function PageHeaderLeft() {
    return (
        <div className="pageMob">
            <div className='logo'>
                <img src="https://cdn.iconscout.com/icon/free/png-512/shazam-1-722737.png" alt="Company Logo" />
            </div>
            <div className="pageHeader__down__left">
                <h3>Dashboard</h3>
                <h5>Monday, <span className="pageHeader__date">02 July 2020</span></h5>
            </div>
            <div className="userdet">
                <PageRightHeader />
            </div>
        </div>
    )
}

export default PageHeaderLeft
