import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../App.css";

const Tempapp = () => {
    
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bbe794dbd01844a0881151912b43fd4d`
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search])

    // Date
    let d = new Date();
    let date = d.getDate();
    let year = d.getFullYear();
    let month = d.toLocaleString("default" , {month:'long'});
    let day = d.toLocaleString("default", {weekday:'long'});

    //Time
    let time = d.toLocaleString([],{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });


    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search" className="inputFeild" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                </div>
                {!city ? (
                    <p className="errorMsg"> No Data Found </p>
                ) : (
                    <div className="">

                        <div className="info">
                            <h2 className="location">
                                <i className="fas fa-street-view"></i> {search}
                            </h2>
                            <p id="date">{day} | {month} {date} | {year}
                            <br/> {time}
                            </p>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>
                            <h3 className="tempmin_max"> Min : {city.temp_min}°Cel | Max :{city.temp_max}°Cel </h3>
                        </div>

                        <div className="wave one"></div>
                        <div className="wave two"></div>
                        <div className="wave three"></div>
                    </div>
                )
                }
            </div>
        </>
    );
}

export default Tempapp;