import React from 'react'
import './work.css'

function Work() {
    return (
        <div className='work' id='work'>
            <div className="timeline">
                <div className="work-con left">
                    <div className="content">
                        <h2 className='year'>September 2021 - January 2022</h2>
                        <div className="details">
                            <h3 className='title'>
                                Web Deverloper
                            </h3>
                            <p className='description'>
                                <p style={{ fontWeight: "bolder" }}>Course Square Co., Ltd.</p>
                                about web application of company job description improve ui ,various bug fixes
                                and manage information frontend using vue and vuex framework backend using laravel framework
                                database Mysql and mongoDB
                                but most will do frontend.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work-con right">
                    <div className="content">
                        <h2 className='year'>December 2020 - March 2021</h2>
                        <div className="details">
                            <h3 className='title'>
                                Frontend and Backend Developer
                            </h3>
                            <p className='description'>
                                Internship at <p style={{ fontWeight: "bolder" }}>SCMS Technologies Co., Ltd.</p>
                                about Web Application
                                job description manage information
                                Using Angular and Spring boot Framework database Mysql.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="work-con left">
                <div className="content">
                    <h2 className='year'>2017</h2>
                    <div className="details">
                        <h3 className='title'>
                            test
                        </h3>
                        <p className='description'>
                            paragram
                        </p>
                    </div>
                </div>
            </div> */}

            </div >
        </div>
    )
}

export default Work