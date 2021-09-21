import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { deseaseURl, getAllCountries, getMyCountryName } from './Api/desease';
import { message } from 'antd';
import Header from './Components/Header';
import ViewAllCountries from './Components/AllCountriesComponent/ViewAllCountries';
import ViewMyCountry from './Components/LocatedCountry/ViewMyCountry';
import ViewCountryStatistics from './Components/CountryStatistics/ViewCountryStatistics';


function App() {
  const [data, setData] = useState([]);
  const [myCountry, setMyCountry] = useState("");

  const requestForAllCoutries = async () => {
    const [error, data] = await getAllCountries();
    if (error) {
      message.error("soo")
      return
    }
    setData((x) => data);
    const [errorMyCountry, myCountry] = await getMyCountryName();
    if (!errorMyCountry) {
      const x = data.filter((country: any) => {
        return myCountry.country === country.countryInfo.iso2;
      });

      if (x.length > 0) {
        setMyCountry(x[0]);
      }
    }
  }
  useEffect(() => {
    requestForAllCoutries();
  }, []);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/chart/:country" exact>
            <ViewCountryStatistics />
          </Route>
          <Route path="/">
            <ViewMyCountry myCountry={myCountry} />
            <ViewAllCountries data={data} />
          </Route>
        </Switch>
      </Router>
    </>);
}

export default App;


