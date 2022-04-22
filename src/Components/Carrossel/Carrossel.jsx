import React from 'react'
import { Carousel } from 'antd'
import { Card } from 'antd'
import produto1 from './static/dipirona.png'
import produto2 from './static/dorflex.png'
import produto3 from './static/soro.png'
import produto4 from './static/remedio3.png'

function Carrossel(props) {
    return (
        <Carousel autoplay style={{ width: 400, height: 450 }}>
            <div>
                <Card
                    hoverable
                    style={{ width: 400, height: 400 }}
                    cover={<img alt="produto-1" src={produto1} />}
                />
            </div>
            <div>
                <Card
                    hoverable
                    style={{ width: 400, height: 400 }}
                    cover={<img alt="produto-2" src={produto2} />}
                />
            </div>
            <div>
                <Card
                    hoverable
                    style={{ width: 400, height: 400 }}
                    cover={<img alt="produto-3" src={produto3} />}
                />
            </div>
            <div>
                <Card
                    hoverable
                    style={{ width: 400, height: 400 }}
                    cover={<img alt="produto-4" src={produto4} />}
                />
            </div>
        </Carousel>
    )
}

export default Carrossel