import React from 'react'
import './PageWhole.css';
import PageHeader from '../PageHeader/PageHeader';
import Page from '../Page/Page';

function PageWhole() {
    return (
        <div className='pageWhole'>
            < PageHeader />
            < Page />
        </div>
    )
}

export default PageWhole
