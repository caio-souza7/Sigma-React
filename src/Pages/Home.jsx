import React from 'react';
import { Layout } from 'antd'
import StyledContent from '../Components/Content/StyledContent'
import StyledFooter from '../Components/Footer/StyledFooter'
import StyledHeader from '../Components/Header/StyledHeader'
import styledComponents from 'styled-components'

const StyleLayout = styledComponents(Layout)`
  min-height: 100vh;
`
const Home = (props) => {
    return (
        <StyleLayout >
            <StyledHeader />
            <StyledContent>
                index
            </StyledContent>
            <StyledFooter />
        </StyleLayout >
    )
}

export default Home