import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (

    <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row>
    <Col xs={12} md={8}>
      xs=12 md=8
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
  <Row>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
    <Col xs={6} md={4}>
      xs=6 md=4
    </Col>
  </Row>

  {/* Columns are always 50% wide, on mobile and desktop */}
  <Row>
    <Col xs={6}>xs=6</Col>
    <Col xs={6}>xs=6</Col>
  </Row>
</Container>
  )
}
