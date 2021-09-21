import { Col, Row } from 'antd'
import React from 'react'

interface IProps {
    myCountry: any
}
const borderCSS = {
    borderBottom: "0.5px solid black",
    padding: 10,
}
const ViewMyCountry = (props: IProps) => {
    return (
        <div className="box-shadow background-color-blue view-my-country padding-20">
            {
                props.myCountry && (
                    <>
                        <Row className="center">
                            <Col xs={{ span: 24 }} style={{ ...borderCSS }}>
                                Your Place of Residence is : &nbsp;
                                <img
                                    height={24}
                                    width={36}
                                    src={
                                        props.myCountry.countryInfo ?
                                            props.myCountry.countryInfo.flag : ""
                                    }
                                    alt="flag"
                                />
                                &nbsp;  &nbsp;
                                {props.myCountry.country}
                            </Col>
                        </Row>
                        <Row justify="center" className="center">
                            <Col md={{ span: 8 }} style={{ ...borderCSS }} xs={{ span: 24 }}>
                                Confirmed :
                                <span style={{
                                    color: "white"
                                    //  "#e53e3e"
                                }}> {props.myCountry.cases.toLocaleString('en-US')} </span>
                            </Col>
                            <Col md={{ span: 8 }} style={{ ...borderCSS }} xs={{ span: 24 }}>
                                Recovered :
                                <span style={{
                                    color: "white"
                                    //  "#108885"
                                    // "#38a169"
                                }}> {props.myCountry.recovered.toLocaleString('en-US')} </span>
                            </Col>
                            <Col md={{ span: 8 }} xs={{ span: 24 }} style={{ ...borderCSS }}>
                                Deaths :
                                <span style={{
                                    color: "white"
                                    // "#718096"
                                }}> {props.myCountry.deaths.toLocaleString('en-US')} </span>
                            </Col>
                        </Row>
                    </>)
            }
        </div>
    )
}

export default ViewMyCountry
