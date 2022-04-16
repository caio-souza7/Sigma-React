import React from 'react'
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import logo from './static/logoMarca.png'
import styledComponents from 'styled-components';
import { ExportOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons';

const Header = styledComponents(Layout)`
    background-color: rgb(229,229,229);
    max-height: 4rem;
    padding: 0;
`
const StyledCol = styledComponents(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`

function StyledHeader(props) {
    return (
        <Header>
            <Row>
                <StyledCol span={6}>
                    <img src={logo} alt="logo" width={50} height={50} />
                </StyledCol>
                <StyledCol span={6}><ShopOutlined /></StyledCol>
                <StyledCol span={6}><UserOutlined /></StyledCol>
                <StyledCol span={6}><ExportOutlined /></StyledCol>
            </Row>
        </Header>
    )
}

export default StyledHeader