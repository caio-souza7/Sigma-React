import React from 'react'
import { Layout } from 'antd'
import StyledContent from '../Components/Content/StyledContent'
import StyledFooter from '../Components/Footer/StyledFooter'
import StyledHeader from '../Components/Header/StyledHeader'
import styledComponents from 'styled-components'
import Information from '../Components/Information/Information'

const StyleLayout = styledComponents(Layout)`
  min-height: 100vh;
`
function Informacoes(props) {
    return (
        <StyleLayout >
            <StyledHeader />
            <StyledContent >
                <Information />
            </StyledContent>
            <StyledFooter />
        </StyleLayout >
    )
}

export default Informacoes