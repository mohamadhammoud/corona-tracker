import { Col, Row, Select } from 'antd'
import covid from "../assets/corona.jpeg"
const Header = () => {
    const { Option } = Select;
    return (
        <div className="padding-20">
            <Row className="padding-20 header box-shadow" style={{ borderRadius: 5 }}>
                <Col sm={{ span: 2 }} xs={{ span: 4 }} className="right">
                    <img
                        src={covid}
                        style={{ height: 52, width: 52, borderRadius: 30 }}
                        alt="Covid-Image"
                    />
                </Col>
                <Col sm={{ offset: 2, span: 18 }} xs={{ span: 20 }}>
                    <div className="font-size-28 padding-top-5" style={{ fontWeight: 700 }}>
                        Covid-19 Tracker
                    </div>
                </Col>
                <Col flex="auto" sm={{ offset: 10, span: 4 }} xs={{ offset: 2 }} className="padding-top-5">
                    {/* <Select bordered={false} style={{ backgroundColor: "white", borderRadius: 30, width: 180 }} >

                    </Select> */}
                </Col>
            </Row>
        </div>
    )
}

export default Header
