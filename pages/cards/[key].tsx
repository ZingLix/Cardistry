import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { Image, Row, Col, Typography, Divider, Descriptions, Card, Tag, Carousel, List } from "antd";
import CardsList, { CardsType, QueryCards } from '../api/cards';

const { Title } = Typography;
const { Meta } = Card;

export async function getStaticPaths() {
  const cards = CardsList()
  console.log(cards.map(item => ({ params: { key: item.key } })))
  return {
    paths: cards.map(item => ({ params: { key: item.key } })),
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(prop: any) {
  return {
    props: {
      card: QueryCards(prop.params.key)
    }
  }
}

const CardDetailPage: NextPage = ({ card }: any) => {
  const unknownConvert = (value: string) => {
    if (value == "") return "未知"
    return value
  }

  return (
    <Row >
      <Col span={24} style={{ textAlign: "left" }}>
        <Title level={2}>{card.name}</Title>
        <Divider />
        <Row>
          <Col span={8}>
            <Carousel autoplay>
              {
                card.img_list.map((item: any) => (
                  <div >
                    <Image src={item.url} height={300} />
                  </div>
                ))
              }
            </Carousel >
          </Col>
          <Col span={16} >
            <Descriptions style={{ marginLeft: "16px", marginTop: "20px" }}>
              <Descriptions.Item label="动作名称" span={3}>{card.name}</Descriptions.Item>
              <Descriptions.Item label="发明人" span={3}>{unknownConvert(card.designer)}</Descriptions.Item>
              <Descriptions.Item label="印刷厂" span={3}>{unknownConvert(card.printer)}</Descriptions.Item>
              <Descriptions.Item label="Tags" span={3}>
                {card.tags.map((item: any) => (<Tag color="blue">{item}</Tag>))}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row style={{ margin: "32px" }}>
          <Title level={3}>图片</Title>
          <Divider />
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={card.img_list}
            renderItem={(item: any, index: number) => (
              <List.Item>
                <Card
                  hoverable
                  cover={<img alt="example" src={item.url} />}
                  onClick={() => { window.location.href = item.url }}
                >
                </Card>
              </List.Item>
            )}
          />
        </Row>
      </Col>

    </Row>
  )
}

export default CardDetailPage
