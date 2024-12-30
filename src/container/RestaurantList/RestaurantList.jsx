// import data from "../../static/dataset";
import { useState } from "react";
import Card from "../../components/RestaurantCard/restaurantcard";
import data from "../../components/static/dataset";
import styles from "./RestaurantList.module.css";

const RestaurantsList = () => {

    const [searchkey,setSearchkey] = useState("");
    const[ratingkey,setRatingkey] = useState(0);

    const onSearchKeyChange= (event) => {
        setSearchkey(event.target.value)
    }
    const onRatingsChange= (event) => {
    setRatingkey(Number(event.target.value))
    }
     
    const restaurantFilterFn = (restaurant) => {
        // console.log("name", searchKey)
        // console.log("rating", minRating)
        return (
            (restaurant.name.toLowerCase().includes(searchkey.toLowerCase())
                || restaurant.address.toLowerCase().includes(searchkey.toLowerCase()))
            && restaurant.rating >= ratingkey)
    };






    return (
   
        <div >
        <form className={styles["filter-form"]}>
            <div>
                <input onChange={onSearchKeyChange} type="text" placeholder="Search restaurants.." />
            </div>
            <div>
                <label htmlFor="minRating">Minimum Rating</label>
                <input onChange={onRatingsChange} type="number" id="minRating" />
            </div>
        </form>



        <div className={styles.card}>
            
           { data.filter(restaurantFilterFn).map((restaurant) => <Card key={restaurant._id} {...restaurant}/> )}
        </div>
        </div>
    )
}

export default RestaurantsList;  // export the component