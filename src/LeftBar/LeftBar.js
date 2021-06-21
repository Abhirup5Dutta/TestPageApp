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
                    <img src="https://lh3.googleusercontent.com/proxy/A-bZcLdAk1ISL1f3EGF-TQLtEoota6O2JwsNJw0rF1GXYSVbg8maLgiOjCJBd-esyaj39v1dI25f9CS4mHPC4H99ue9AZus_VPdF1sraczMNQw1yoa91lNjfCA" alt="Company Logo" />
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
