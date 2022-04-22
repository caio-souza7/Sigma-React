import React from 'react'
import { Card } from 'antd'
import styledComponents from 'styled-components'
import perfil from './static/perfil.png'

const StyledCard = styledComponents(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
`
const { Meta } = Card

function Information(props) {
    return (
        <StyledCard
            hoverable
            style={{ width: 440 }}
            cover={<img alt="caio" src={perfil} />}
        >
            <a href="https://github.com/caio-souza7" target="_blank">
                <Meta title="Desenvolvedor Web" description="Obrigado Deus" />
            </a>
        </StyledCard>
    )
}

export default Information