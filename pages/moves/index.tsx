import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { Image, Row, Col, Typography, Divider, List, Card, Tag } from "antd";
import MovesList, { MovesType } from '../api/moves';

const { Title } = Typography;
const { Meta } = Card;

export async function getStaticProps() {
  const moves = MovesList()
  return {
    props: {
      moves
    }
  }
}

const MovePage: NextPage = ({ moves }: any) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={24} style={{ textAlign: "left" }}>
        <Title level={2}>Moves</Title>
        <Divider />
      </Col>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={moves}
        renderItem={(item: MovesType) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="example" src={item.cover_img} />}
              onClick={() => { window.location.href = `/moves/${item.key}` }}
            >
              <Meta
                title={item.name}
                description={item.tags.map((tag: string) => (<Tag color="blue">{tag}</Tag>))}
              ></Meta>
            </Card>
          </List.Item>
        )}
      />
    </Row>
  )
}

export default MovePage
