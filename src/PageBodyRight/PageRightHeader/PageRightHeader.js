import React from 'react'
import './PageRightHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

function PageRightHeader() {
    return (
        <div className='pageRightHeader'>
            <div className="pageHeader__top">
                <NotificationsIcon />
                <p className="para">
                    John Bayer
                </p>
                <Avatar src='https://media.bizj.us/view/img/11627584/200227johnbayer-square*220xx600-800-100-0.png' />
                <ExpandMoreIcon />
            </div>
            <div className="pageHeader__down__right">
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
    )
}

export default PageRightHeader
