import React from 'react';
import styles from './Cards.module.scss'; 

const Cards = ({results}) => {
    let display; 
    console.log(results); 
    if(results){
       display = results.map(x=>{
           let {id, name, image, location, status, type, species} = x
           return(<div key={id} className={`col-sm-6 col-md-4 mb-4 position-relative ${styles.custom_col}`}>
                <div className={`${styles.cards} h-100  ${styles.cardHoverEffect}`}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`}></img>
                    <div style={{padding: "10px"}}className="content">
                        <div className="fs-5 fw-bold">{name}</div>
                        <div className="fs-6 text-primary">{species}</div>
                        <hr></hr>
                        <div className="">
                            <span className="material-symbols-outlined fs-7" style={{ fontSize: '14px' }}>location_on</span> {location.name} 

                        </div>
                    </div>
                </div>
                {(()=>{
                    if(status == "Dead"){
                        return(
                            <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                        )
                    }
                    else if(status == "Alive"){
                        return(
                            <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                        )
                    }
                    else {
                        return(
                            <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                        )
                    }
                })()}
                
            </div>
            );
       }); 
    } else{ 
        display = "No Characters Found :("
    }
    
    return <>{display}</>
    
}

export default Cards