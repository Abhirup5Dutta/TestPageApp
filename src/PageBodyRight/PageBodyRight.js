import React from 'react'
import './PageBodyRight.css';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

function PageBodyRight() {
    return (
        <div className='pageBodyRight'>
            <div className="rightHead">
                < ForwardOutlinedIcon />
                <div className="rightHeader">
                    <h3>
                        Hello John Bayer,
                    </h3>
                    <h3>
                        You have 8 New Applications Today!
                    </h3>
                </div>
            </div>
            <img src="https://images.squarespace-cdn.com/content/v1/51abe1dae4b08f6a770bf7d0/1569943337782-HLIY8K09XFNXDSN5MQX8/ke17ZwdGBToddI8pDm48kLxnK526YWAH1qleWz-y7AFZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVH-2yKxPTYak0SCdSGNKw8A2bnS_B4YtvNSBisDMT-TGt1lH3P2bFZvTItROhWrBJ0/mail.gif" alt="Applications" />

            <div className="rightBottom">
                <div className="rightBottomHead">
                    <h3>
                        New Applicants
                    </h3>
                    < ChevronRightOutlinedIcon />
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                Rosie Metts.
                            </h5>
                            <small>
                                Applied for <span className="applied__for">ios Developer</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                James Scott
                            </h5>
                            <small>
                                Applied for <span className="applied__for">Native Developer</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                Jamie Laurenson
                            </h5>
                            <small>
                                Applied for <span className="applied__for">Marketting Manager</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                Elizabeth Hurton
                            </h5>
                            <small>
                                Applied for <span className="applied__for">Graphics Designer</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                Danny Watson
                            </h5>
                            <small>
                                Applied for <span className="applied__for">ios Developer</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
                <div className="user">
                    <div className="userLeft">
                        < AccountCircleOutlinedIcon />
                        <div className="userDetails">
                            <h5>
                                Reha Scarlett
                            </h5>
                            <small>
                                Applied for <span className="applied__for">ios Developer</span>
                            </small>
                        </div>
                    </div>
                    <div className="userRight">
                        < EmailIcon />
                        < CallIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageBodyRight
