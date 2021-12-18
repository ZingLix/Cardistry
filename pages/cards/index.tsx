import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { Image, Row, Col, Typography, Divider, List, Card, Tag } from "antd";
import CardsList, { CardsType } from '../api/cards';

const { Title } = Typography;
const { Meta } = Card;

export async function getStaticProps() {
  const cards = CardsList()
  return {
    props: {
      cards
    }
  }
}

const CardPage: NextPage = ({ cards }: any) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={24} style={{ textAlign: "left" }}>
        <Title level={2}>Cards</Title>
        <Divider />
      </Col>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={cards}
        renderItem={(item: CardsType) => (
          <List.Item>
            <Card
              hoverable
              cover={<img alt="example" src={item.cover_img} />}
              onClick={() => { window.location.href = `/cards/${item.key}` }}
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

export default CardPage
