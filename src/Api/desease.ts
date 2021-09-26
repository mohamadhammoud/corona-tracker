import axios from "axios";

export const deseaseURl = axios.create({
    baseURL: "https://disease.sh/v3/covid-19"
})


export const getTotalStatistics = async () => {

    try {
        const response = await deseaseURl.get("/all");
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}
export const getAllHistoicalChart = async (days: number) => {

    try {
        const response = await deseaseURl.get(`/historical/all?lastdays=${days}`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}

export const getAllCountries = async () => {

    try {
        const response = await deseaseURl.get("/countries");
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}



export const getCountryByName = async (country: string) => {

    try {
        const response = await deseaseURl.get(`/countries/${country}`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}

export const getCountryChart = async (country: string, days: number) => {

    try {
        const response = await deseaseURl.get(`historical/${country}?lastdays=${days}`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}

export const getMyCountryName = async () => {
    try {
        const response = await axios.get(`https://api.country.is`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}
export const getCountryDetails = async (country: string) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/name/${country}?fullText=true`);
        return [null, response.data];
    } catch (error) {
        return [error, null];
    }
}