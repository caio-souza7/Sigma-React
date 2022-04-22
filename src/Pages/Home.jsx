import React from 'react';
import { Layout } from 'antd'
import StyledContent from '../Components/Content/StyledContent'
import StyledFooter from '../Components/Footer/StyledFooter'
import StyledHeader from '../Components/Header/StyledHeader'
import styledComponents from 'styled-components'
import Carrossel from '../Components/Carrossel/Carrossel';

const StyleLayout = styledComponents(Layout)`
  min-height: 100vh;
`
function Home(props) {
    return (
        <StyleLayout >
            <StyledHeader />
            <StyledContent>
                <Carrossel />
            </StyledContent>
            <StyledFooter />
        </StyleLayout >
    )
}

export default Home