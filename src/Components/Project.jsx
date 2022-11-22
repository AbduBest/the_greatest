import React from 'react';


const Project = props => {
    return (
        <div>
            
            <div className="card">
                <div className="lines"></div>
                <div className="imgBX">
                    <img src={props.img} className={props.img_style} alt=""/>
                </div>
                <div className="content">
                    <div className="details">
                        <h1 className={props.style2}>{props.name}<br /><span>Jannatiy sahoba</span><br />{props.year}</h1>
                        <div className={props.style1}>
                            <h2>{props.info1}</h2>
                            <hr />
                            <h2>{props.info2}</h2>
                            <hr />
                            <h2>{props.info3}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Project;