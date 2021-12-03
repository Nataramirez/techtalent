/*eslint-disable*/
import React, { useEffect, useState } from "react";
import './card.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends, faCar, faSuitcaseRolling, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import days from '../formulate/days'

function Card({ imageCar, imageCompany, category, model, passengers, doors, dailyRate, totalRate }) {
    const [fullDays, setFullDays] = useState('')

    
    useEffect(() => {
        const fullDay = async () => {
            setFullDays(await days(dailyRate, totalRate))
        }
        
        fullDay()
        
    }, [])
    
    
    return (        
        <article className="card-bg">
            <img className="foto-auto" src={imageCar} alt="car image" />
            <p className="treinta rectangle">-30%</p>
            <img className="logo-company" src={imageCompany} alt="company image" />
            <p className="category" >{category}</p>
            <p className="model" >{model}</p>
            <div className="card">
                <FontAwesomeIcon icon={faUserFriends} className="icon icon-passengers" />
                <p className="shape shape-passengers">{passengers}</p>
                <FontAwesomeIcon icon={faDoorOpen} className="icon icon-doors" />
                <p className="shape shape-doors">{doors}</p>
                <FontAwesomeIcon icon={faSuitcaseRolling} className="icon icon-day" />
                <p className="shape shape-days">{fullDays}</p>
                <div>
                    <FontAwesomeIcon icon={faCar} className="icon-car" />
                    <div className="rectangle-car"></div>
                    <hr className="hr" />
                    
                </div>
                <div>
                    <p className="dailyRate">{`USD ${dailyRate}`}<span className="dia"> /dia</span></p>
                    <p className="totalRate">{`USD ${totalRate} / ${fullDays} días`}</p>
                </div>
                <button className="btn-reservar text-reservar">Reservar</button>
            </div>




        </article>
    )
}

export default Card;