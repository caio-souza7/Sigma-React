import React from 'react'
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import logo from './static/logoMarca.png'
import styledComponents from 'styled-components'
import { Link } from 'react-router-dom';

const Footer = styledComponents(Layout)`
    background-color: rgba(118,192,189,0.3);
    max-height: 4rem;
    padding: 0;
`
const StyledCol = styledComponents(Col)`
    display: flex;
    justify-content: center;
    align-items: center;
`
function StyledFooter(props) {
    return (
        <Footer>
            <Row>
                <StyledCol span={8}>
                    <img src={logo} alt="logo" width={50} height={50} />
                </StyledCol>
                <StyledCol span={8}><Link to="/informacoes">Desenvolvedor</Link></StyledCol>
                <StyledCol span={8}>a2</StyledCol>
            </Row>
        </Footer>
    )
}

export default StyledFooter