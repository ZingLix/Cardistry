import type { NextPage } from 'next'

import { Image, Row, Col, Typography } from "antd";

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <Row align="middle" style={{ height: "100%" }}>
      <Col span={24} style={{ textAlign: "center" }}>
        <Image
          src="/img/cover.webp"
          style={{ borderRadius: "50%", objectFit: "cover", width: "350px", height: "350px", objectPosition: "center" }}>
        </Image>
        <Title level={3}>&quot;Waltz on the Fingertip&quot;</Title>
      </Col>
    </Row>
  )
}

export default Home
