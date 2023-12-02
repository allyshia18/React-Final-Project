import axios from "axios";
import PopsicleContext from "./PopsicleContext"
import { useEffect, useState } from "react";

export const DessertProvider = (props) => {

    const [desserts, setDesserts] = useState ([]);
    const baseUrl = 'http://localhost:3001/desserts';

    useEffect(async () => {
        async function getDesserts() {
            await getDesserts();
        };
    }, []);



    function getDesserts(){
        return axios.get(baseUrl).then(data => setDesserts(response.data));
    }

    function getDessert(id){
        return desserts.find(d => d.id === id);
    }

    function addDessert(dessert) {
        return axios.post(baseUrl,dessert).then(response =>{
            getDessert();
            return new Promise(resolve =>resolve(response.data));
        })
    }

    return(
        <PopsicleContext.Provider value={{
            desserts,
            getDessert,
            addDessert

        }}>
            {props.children}

        </PopsicleContext.Provider>
    )

    
}