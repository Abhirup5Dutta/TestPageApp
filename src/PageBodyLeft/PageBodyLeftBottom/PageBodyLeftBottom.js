import React from 'react'
import './PageBodyLeftBottom.css';
import NearMeIcon from '@material-ui/icons/NearMe';
import CallMadeIcon from '@material-ui/icons/CallMade';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import DoughnutChart from './DoughnutChart';

function PageBodyLeftBottom() {
    return (
        <div className='pageBodyLeftBottom'>
            <div className="referals">
                <div className="refHead">
                    <h3>
                        Referals and Campaign Stats
                    </h3>
                    <div className="refRight">
                        < NearMeIcon className='red' />
                        <div className="refRightdiv">
                            <h5 className='red'>
                                40 Campaigns sent in total
                            </h5>
                            <h5>
                                4 Campaigns sent in last month
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="divBars">
                    <div className="divSec">
                        <h4>Users Reached</h4>
                        <small>
                            <CallMadeIcon />
                            <span>
                                +3.59%
                            </span>
                        </small>
                        <h3>7956</h3>
                    </div>



                    <div className="divSec">
                        <h4>Referals</h4>
                        <small>
                            <CallMadeIcon />
                            <span>
                                +9.01%
                            </span>
                        </small>
                        <h3>0662</h3>
                    </div>



                    <div className="divSec">
                        <h4>Shares</h4>
                        <small>
                            <CallMadeIcon />
                            <span>
                                +39.15%
                            </span>
                        </small>
                        <h3>1478</h3>
                    </div>



                    <div className="divSec">
                        <h4>Applications</h4>
                        <small>
                            <CallMadeIcon />
                            <span>
                                +12.00%
                            </span>
                        </small>
                        <h3>0564</h3>
                    </div>

                </div>
                <div className="btns">
                    <button className="leftBox">
                        Start a New Campaign now
                    </button>
                    <button className="rightBox">
                        Pause All Running Campaigns
                    </button>
                </div>
            </div>
            <div className="piechart">
                <div className="pieHead">
                    <h3>
                        Open Positions By Department
                    </h3>
                    < MoreHorizIcon className='dots' />
                </div>
                <DoughnutChart />
            </div>
        </div>
    )
}

export default PageBodyLeftBottom
