import React from 'react'
import { Layout } from 'antd'
import { Row, Col } from 'antd'
import styledComponents from 'styled-components'

const { Content } = Layout

const StyledCol = styledComponents(Col)`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
function StyledContent({children}) {
    return (
        <Content>
            <Row>
                <StyledCol span={24}>
                    {children}
                </StyledCol>
            </Row>
        </Content>
    )
}

export default StyledContent