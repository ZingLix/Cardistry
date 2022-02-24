import type { NextPage } from 'next'

import { Image, Row, Col, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons"

const { Title } = Typography;

const Home: NextPage = () => {
  return (
    <Row align="middle" style={{ height: "100%" }}>
      <Col span={24} style={{ textAlign: "center" }}>
        <Image
          src="/img/cover.webp"
          preview={false}
          style={{ borderRadius: "50%", objectFit: "cover", width: "350px", height: "350px", objectPosition: "center" }}>
        </Image>
        <Title level={3}>&quot;Waltz on the Fingertip&quot;</Title>
        <span>
          <Button size="large" href='/moves'>See Moves <ArrowRightOutlined /></Button>
          <Button size="large" href='/cards' style={{ marginLeft: "10px" }}>See Cards <ArrowRightOutlined /></Button>
        </span>
      </Col>
    </Row>
  )
}

export default Home
