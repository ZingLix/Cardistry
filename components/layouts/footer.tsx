import { Layout } from 'antd';
import {

  GithubOutlined,

} from '@ant-design/icons';

const { Footer } = Layout;


export default function PageFooter({ }) {
  return (
    <Footer style={{
      backgroundColor: "white", textAlign: 'center'
    }} >
      发现问题？觉得不足？<a href="https://github.com/ZingLix/Cardistry" target="_blank" rel="noreferrer">来 <GithubOutlined /> GitHub 一起完善该项目</a>
    </Footer>
  )
}