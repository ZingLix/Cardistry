import { Layout, Menu, Row, Col, Typography, Input, Divider } from 'antd';
import {

  SearchOutlined,

} from '@ant-design/icons';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;

export default function PageNavbar({ }) {
  return (
    <Header style={{ backgroundColor: "white", boxShadow: "0 -3px 5px gray" }} >
      <Row align="middle" style={{ maxWidth: "1680px", margin: "0 auto" }}>
        <Col span={4} >
          <a href='/'>
            <Title level={2} style={{ marginBottom: "0" }} >Cardistry</Title>
          </a>
        </Col>
        <Col span={1} >
          <Divider type="vertical" />
        </Col>
        <Col span={17}>
          <Input placeholder="Search" bordered={false} prefix={<SearchOutlined />} style={{ maxWidth: "300px" }} />
          <Menu theme="light" mode="horizontal" style={{ float: "right", minWidth: "300px" }}>
            <Menu.Item key="moves" onClick={() => { window.location.href = "/moves" }}>Moves</Menu.Item>
            <Menu.Item key="cards" onClick={() => { window.location.href = "/cards" }}>Cards</Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header >
  )
}