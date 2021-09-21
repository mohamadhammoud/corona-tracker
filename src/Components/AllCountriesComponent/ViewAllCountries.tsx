import React, { useEffect, useState } from 'react'
import { Button, Input, Table } from 'antd';
import AreaChartOutlined, { LineChartOutlined } from "@ant-design/icons";
import { useHistory } from 'react-router';

interface IProps {
    data: any
}

const ViewAllCountries = (props: IProps) => {
    const history = useHistory();
    const columns = [
        {
            title: 'Country',
            width: 250,
            dataIndex: 'country',
            key: 'country',
            sorter: (a: any, b: any) => a.country - b.country,
            render: (value: string, record: any) => {
                return <div>
                    <img height={24} width={36} src={record.countryInfo.flag} alt="flag" /> &nbsp; {value}
                </div>
            }
        },
        {
            title: 'Confirmed',
            width: 150,
            dataIndex: 'cases',
            key: 'cases',
            sorter: (a: any, b: any) => a.cases - b.cases,
            render: (value: number, record: any) => {
                return value.toLocaleString('en-US')
            }
        },
        // {
        //     title: 'todayCases',
        //     dataIndex: 'todayCases',
        //     key: 'todayCases',
        //     width: 150,
        // },
        {
            title: 'Deaths',
            dataIndex: 'deaths',
            key: 'deaths',
            width: 150,
            sorter: (a: any, b: any) => a.deaths - b.deaths,
            render: (value: number, record: any) => {
                return value.toLocaleString('en-US')
            }
        },
        // {
        //     title: 'todayDeaths',
        //     dataIndex: 'todayDeaths',
        //     key: 'todayDeaths',
        //     width: 150,
        // },
        {
            title: 'Recovered',
            dataIndex: 'recovered',
            key: 'recovered',
            width: 150,
            sorter: (a: any, b: any) => a.recovered - b.recovered,
            render: (value: number, record: any) => {
                return value.toLocaleString('en-US')
            }
        },
        // {
        //     title: 'todayRecovered',
        //     dataIndex: 'todayRecovered',
        //     key: 'todayRecovered',
        //     width: 150,
        // },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            width: 150,
            sorter: (a: any, b: any) => a.active - b.active,
            render: (value: number, record: any) => {
                return value.toLocaleString('en-US')
            }
        },
        {
            title: 'Population',
            dataIndex: 'population',
            key: 'population',
            width: 150,
            sorter: (a: any, b: any) => a.population - b.population,
            render: (value: number, record: any) => {
                return value.toLocaleString('en-US')
            }
        },
        {
            title: 'Continent',
            dataIndex: 'continent',
            key: 'continent',
            sorter: (a: any, b: any) => a.continent - b.continent,
        },
        {
            title: '',
            key: 'operation',
            width: 200,
            render: (_: string, record: any) => <Button icon={<LineChartOutlined />} onClick={() => history.push(`/chart/${record.country}`)} type="primary" style={{ borderRadius: 30, width: 190 }}> Go to Chart </Button>,
        },
    ] as any;

    const [searchedData, setSearchedData] = useState([]);

    const searchForName = (value: string) => {
        const x = props.data.filter((country: any) => {
            return country.country.toLowerCase().includes(value.toLocaleLowerCase());
        });
        console.log("meshe lhal")
        setSearchedData(x);
    }

    return (
        <div style={{ padding: 20 }}>
            <div className="padding-5 box-shadow" style={{ borderRadius: 5 }}>
                <div style={{ marginLeft: 15, fontSize: 20 }}>
                    <span> Search : </span>
                    <Input
                        onChange={(e: any) => {
                            searchForName(e.target.value);
                        }}
                        style={{ width: 250, borderRadius: 30 }}
                    />
                </div>
                <Table
                    bordered={true}
                    className="padding-5 center"
                    columns={columns}
                    dataSource={searchedData.length > 0 ? searchedData : props.data}
                    scroll={{ x: 1000 }}
                    rowKey={(data) => data.country}
                />
            </div>
        </div>
    )
}

export default ViewAllCountries
