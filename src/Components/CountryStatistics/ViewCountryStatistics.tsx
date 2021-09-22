import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { getCountryChart, getCountryDetails } from '../../Api/desease';
import { Button, Col, Row } from 'antd';

const ViewCountryStatistics = () => {
    const history = useHistory();
    const { country } = useParams() as any;

    const [countryDetails, setCountryDetails] = useState<any>();
    const [labels, setLabels] = useState([]);
    const [confirmed, setConfirmed] = useState([]);
    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const request = async () => {
        const [error, data] = await getCountryChart(getLocalStorage("country", country), 7);
        if (!error) {
            let x = Object.keys(data.timeline.recovered).map(function (key) {
                return key;
            });
            setLabels(x as any);

            x = Object.keys(data.timeline.cases).map(function (key) {
                return data.timeline.cases[key];
            });
            setConfirmed((y) => x as any);

            const d = Object.keys(data.timeline.deaths).map(function (key) {
                return data.timeline.deaths[key];
            });
            setDeaths((y) => d as any);

            const r = Object.keys(data.timeline.recovered).map(function (key) {
                return data.timeline.recovered[key];
            });
            setRecovered((y) => r as any);
        }
    }

    function setLocalStorage(key: any, value: any) {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {

        }
    }

    function getLocalStorage(key: any, initialValue: any) {
        try {
            const value = window.localStorage.getItem(key);
            return value ? JSON.parse(value) : initialValue;
        } catch (e) {
            // if error, return initial value
            return initialValue;
        }
    }

    const requestForCountryDetails = async (value: string) => {
        const [error, res] = await getCountryDetails(country);
        if (!error) {
            setCountryDetails(res[0]);

        }
    }

    useEffect(() => {
        if (country) {
            setLocalStorage('country', country);
        }

        requestForCountryDetails(country);
        request();
    }, []);

    const confirmedData = {
        labels: [...labels],
        datasets: [
            {
                label: 'Confirmed',
                data: [...confirmed],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                // backgroundColor: "rgba(75,192,192,1)",
                tension: 0.1
            },
        ]
    };
    const deathData = {
        labels: [...labels],
        datasets: [
            {
                label: 'Deaths',
                data: [...deaths],
                fill: true,
                borderColor: 'red',
                tension: 0.1
            },

        ]
    };
    const RecoveredData = {
        labels: [...labels],
        datasets: [
            {
                label: 'Recovered',
                data: [...recovered],
                fill: true,
                borderColor: 'green',
                tension: 0.1
            }
        ]
    };

    const options = {
        //   maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                beginAtZero: true
            }
        },
    };
    const borderCSS = {
        borderBottom: "0.5px solid black",
        padding: 10,
    }
    return (
        <div className="padding-20">
            <Line translate={undefined} data={confirmedData} style={{ maxHeight: 300 }} options={options} className="box-shadow" />
            <Line translate={undefined} data={deathData} style={{ maxHeight: 300 }} options={options} className="margin-top-10 box-shadow" />
            <Line translate={undefined} data={RecoveredData} style={{ maxHeight: 300 }} options={options} className="margin-top-10 box-shadow" />
            {/* <Line translate={undefined} data={RecoveredData} options={options} className="margin-top-10 box-shadow" /> */}
            {countryDetails && <div className=" view-my-country box-shadow margin-top-10" style={{ fontSize: 24, backgroundColor: "#d35400" }}>
                <Row className="padding-20">
                    <Col span={24} style={{ borderBottom: "1px solid black", fontWeight: 700 }}>
                        Country Details :
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Country : &nbsp;
                        <span style={{ color: "white" }} >
                            {countryDetails.name}
                        </span>
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Flag :
                        &nbsp;
                        <img
                            height={24}
                            width={36}
                            src={
                                countryDetails.flag ? countryDetails.flag : ""
                            }
                            alt="flag"
                        />
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Region :
                        &nbsp;
                        <span style={{ color: "white" }}>
                            {countryDetails.region}
                        </span>
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Population :
                        <span style={{
                            color: "white"
                            //  "#e53e3e"

                        }}> {countryDetails.population}
                        </span>
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Capital :
                        <span style={{
                            color: "white"
                            //  "#108885"
                            // "#38a169"
                        }}> {countryDetails.capital} </span>
                    </Col>
                    <Col sm={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                        Currency :
                        <span style={{
                            color: "white"
                            // "#718096"
                        }}> {countryDetails.currencies[0].name} </span>
                    </Col>
                </Row>
            </div>}
            <div className="center padding-20">
                <Button type="primary" style={{ borderRadius: 30, width: 300 }} className="background-color-blue" onClick={() => history.push("/")}>
                    Go Back
                </Button>
            </div>
        </div>
    )
}

export default ViewCountryStatistics
