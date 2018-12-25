import axios from "axios";

function data() {
        axios.post("https://api.themoviedb.org/3/movie/top_rated?api_key=418a2c57e3a40a68638d0017f189fca9").then((response) => {
        return response.data
    })
}
export default data;
