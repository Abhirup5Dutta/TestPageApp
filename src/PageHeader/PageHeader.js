import React from 'react'
import './PageHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function PageHeader() {
    return (
        <div className='pageHeader'>
            <div className="pageHeader__top">
                <NotificationsIcon />
                <p className="para">
                    John Bayer
                </p>
                <Avatar src='https://media.bizj.us/view/img/11627584/200227johnbayer-square*220xx600-800-100-0.png' />
                <ExpandMoreIcon />
            </div>
            <div className="pageHeader__down">
                <div className="PageHeader__down__left">
                    <h3>Dashboard</h3>
                    <h5>Monday, <span className="pageHeader__date">02 July 2020</span></h5>
                </div>
                <div className="PageHeader__down__right">
                    <button className="rightbox">
                        <AddIcon className="right__add__member" />
                        <span>Add</span>
                    </button>
                    <div className="pageHeader__search">
                        <SearchRoundedIcon />
                        <input placeholder='Search for Application here' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageHeader
