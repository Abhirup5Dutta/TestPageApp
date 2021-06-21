import React from 'react'
import './LeftBar.css';
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FolderIcon from '@material-ui/icons/Folder';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import CommentIcon from '@material-ui/icons/Comment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

function LeftBar() {
    return (
        <div className='leftBar'>
            <div className="leftAbove">
                <div className='logo'>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/shazam-1-722737.png" alt="Company Logo" />
                </div>
                < HomeIcon />
                < AssessmentIcon />
                < FolderIcon />
                < PeopleAltOutlinedIcon />
                < CommentIcon />
                < ExitToAppIcon />
            </div>
            <div className="leftBottom">
                < SettingsIcon />
            </div>
        </div>
    )
}

export default LeftBar
