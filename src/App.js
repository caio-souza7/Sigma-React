import 'antd/dist/antd.css'
import { Layout } from 'antd'
import StyledContent from './Components/Content/StyledContent'
import StyledFooter from './Components/Footer/StyledFooter'
import StyledHeader from './Components/Header/StyledHeader'
import styledComponents from 'styled-components'

const StyleLayout = styledComponents(Layout)`
  max-height: 100%;
`
function App() {
  return (
    <StyleLayout >
      <StyledHeader />
      <StyledContent />
      <StyledFooter />
    </StyleLayout >
  )
}

export default App
