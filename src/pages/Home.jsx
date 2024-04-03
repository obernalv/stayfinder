import { useSelector } from "react-redux";
import HotelCard from '../components/homePage/HotelCard'

const Home = () => {
const hotels = useSelector((state) => state.hotels);

console.log(hotels);

    return (
        <div>
            <div>
                {hotels?.map((hotelInfo) => (
                    <HotelCard key={hotelInfo.id} hotel={hotelInfo} />
                ))}
            </div>
        </div>
    )
}

export default Home;
