import React from 'react'
import './PageBodyLeftTop.css';
import CallMadeIcon from '@material-ui/icons/CallMade';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimateProvider from './AnimateProvider';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function PageBodyLeftTop() {
    return (
        <div className='pageBodyleftTop'>
            <div className="firstCard">
                <div className="cardLeft">
                    <h6 className="cardHead">
                        Total Applications
                    </h6>
                    <h3>7956</h3>
                    <small>
                        <CallMadeIcon />
                        <span>
                            +3.59%
                        </span>
                    </small>
                </div>
                <div className="cardRight">
                    <MoreHorizIcon className='dots' />
                    <AnimateProvider valueStart={0} valueEnd={70} >
                        {(value) => (
                            <CircularProgressbar
                                className='back'
                                value={value}
                                text={`+${value}%`}
                                circleRatio={1}
                                styles={{
                                    trail: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#be2cdb",
                                    },
                                    text: {
                                        fill: "#be2cdb"
                                    },
                                    pathTransitionDuration: 3,
                                }}
                                strokeWidth={10}
                            />
                        )}
                    </ AnimateProvider>
                </div>
            </div>
            <div className="secondCard">
                <div className="cardLeft">
                    <h6 className="cardHead">
                        Shortlisted Candidates
                    </h6>
                    <h3>4658</h3>
                    <small>
                        <CallMadeIcon />
                        <span>
                            +0.6%
                        </span>
                    </small>
                </div>
                <div className="cardRight">
                    <MoreHorizIcon className='dots' />
                    <AnimateProvider valueStart={0} valueEnd={60} >
                        {(value) => (
                            <CircularProgressbar
                                className='back'
                                value={value}
                                text={`+${value}%`}
                                circleRatio={1}
                                styles={{
                                    trail: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#35db3a",
                                    },
                                    text: {
                                        fill: "#35db3a"
                                    },
                                    pathTransitionDuration: 3,
                                }}
                                strokeWidth={10}
                            />
                        )}
                    </ AnimateProvider>
                </div>
            </div>
            <div className="thirdCard">
                <div className="cardLeft">
                    <h6 className="cardHead">
                        Total Applications
                    </h6>
                    <h3>1501</h3>
                    <small>
                        <CallMadeIcon />
                        <span>
                            +0.4%
                        </span>
                    </small>
                </div>
                <div className="cardRight">
                    <MoreHorizIcon className='dots' />
                    <AnimateProvider valueStart={0} valueEnd={40} >
                        {(value) => (
                            <CircularProgressbar
                                className='back'
                                value={value}
                                text={`+${value}%`}
                                circleRatio={1}
                                styles={{
                                    trail: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 1.5s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#e80e0e",
                                    },
                                    text: {
                                        fill: "#e80e0e"
                                    },
                                    pathTransitionDuration: 3,
                                }}
                                strokeWidth={10}
                            />
                        )}
                    </ AnimateProvider>
                </div>
            </div>
        </div>
    )
}

export default PageBodyLeftTop
