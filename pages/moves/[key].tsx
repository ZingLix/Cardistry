import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { Image, Row, Col, Typography, Divider, Descriptions, Card, Tag, Carousel, List } from "antd";
import MovesList, { MovesType, QueryMove } from '../api/moves';

const { Title } = Typography;
const { Meta } = Card;

export async function getStaticPaths() {
  const moves = MovesList()
  return {
    paths: moves.map(item => ({ params: { key: item.key } })),
    fallback: false // See the "fallback" section below
  };
}

export async function getStaticProps(prop: any) {
  return {
    props: {
      move: QueryMove(prop.params.key)
    }
  }
}

const MoveDetailPage: NextPage = ({ move }: any) => {
  const unknownConvert = (value: string) => {
    if (value == "") return "未知"
    return value
  }

  return (
    <Row style={{ width: "100%" }}>
      <Col span={24} style={{ textAlign: "left" }}>
        <Title level={2}>{move.name}</Title>
        <Divider />
        <Row>
          <Col span={8}>
            <Carousel autoplay>
              {
                move.img_list.map((item: any) => (
                  <div key={item.url}>
                    <Image src={item.url} height={300} />
                  </div>
                ))
              }
            </Carousel >
          </Col>
          <Col span={16} >
            <Descriptions style={{ marginLeft: "16px", marginTop: "20px" }}>
              <Descriptions.Item label="动作名称" span={3}>{move.name}</Descriptions.Item>
              <Descriptions.Item label="发明人" span={3}>{unknownConvert(move.designer)}</Descriptions.Item>
              <Descriptions.Item label="Tags" span={3}>
                {move.tags.map((item: any) => (<Tag color="blue" key={item}>{item}</Tag>))}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Row style={{ margin: "32px" }}>
          <Col span={24}>
            <Title level={3}>教程</Title>
            <Divider />
            <List
              grid={{
                gutter: 16, column: 4
              }}
              dataSource={move.tutorial_list}
              renderItem={(item: any, index: number) => (
                <List.Item>
                  <Card
                    hoverable
                    cover={<img alt="example" src={item.cover} />}
                    onClick={() => { window.location.href = item.url }}
                    style={{ width: "300px" }}
                  >
                    <Meta
                      title={<Title level={4}>{item.author}</Title>}
                      description={item.tags.map((tag: string) => (<Tag color="blue" key={tag}>{tag}</Tag>))}
                    ></Meta>
                  </Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default MoveDetailPage
