import React from 'react'
import LineChart from './LineChart'
import './PageBodyLeftMiddle.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Progress from './Progress';

function PageBodyLeftMiddle() {

    return (
        <div className='pageBodyLeftMiddle'>
            <div className="lineChart">
                <LineChart />
            </div>
            <div className="linerProgress">
                <h4>Total Applications</h4>
                <div className="progressbars progress1">
                    < FiberManualRecordIcon />
                    Applications
                    <Progress done="45" />
                </div>
                <div className="progressbars progress2">
                    < FiberManualRecordIcon />
                    ShortListed
                    <Progress done="70" />
                </div>
                <div className="progressbars progress3">
                    < FiberManualRecordIcon />
                    Rejected
                    <Progress done="30" />
                </div>
                <div className="progressbars progress4">
                    < FiberManualRecordIcon />
                    On hold
                    <Progress done="10" />
                </div>
                <div className="progressbars progress5">
                    < FiberManualRecordIcon />
                    Recruited
                    <Progress done="65" />
                </div>
            </div>
        </div>
    )
}

export default PageBodyLeftMiddle
