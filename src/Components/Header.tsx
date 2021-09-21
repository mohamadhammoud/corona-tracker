import { Col, Row, Select } from 'antd'
import covid from "../assets/corona.jpeg"
const Header = () => {
    const { Option } = Select;
    return (
        <div className="padding-20">
            <Row className="padding-20 header box-shadow" style={{ borderRadius: 5 }}>
                <Col sm={{ span: 2 }} xs={{ span: 6 }} className="right">
                    <img
                        src={covid}
                        style={{ height: 48, width: 48, borderRadius: 25 }}
                        alt="Covid-Image"
                    />
                    &nbsp; &nbsp;
                </Col>
                <Col sm={{ span: 6 }} xs={{ span: 14 }}>
                    <div className="font-size-24 font-weight-700 padding-top-5" style={{ fontWeight: 700 }}>
                        Corona  Tracker
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
