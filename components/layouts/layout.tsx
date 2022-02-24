import { Layout, Menu, Row, Col } from 'antd';
import React, { useEffect, useState } from 'react'
import PageHeader from './navbar'
import PageFooter from './footer'
import { NextComponentType } from 'next';

const { Header, Footer, Sider, Content } = Layout;

function useIsClient() {
  const [isClient, setIsClient] = React.useState(false);
  // The following effect will be ignored on server, 
  // but run on the browser to set the flag true
  useEffect(() => setIsClient(true), []);
  return isClient
}

export default function PageLayout({ children }: any): any {
  const isClient = useIsClient();
  return (<>{isClient &&
    <Layout style={{ height: "100%", backgroundColor: "white" }}>
      <PageHeader ></PageHeader>
      <Content style={{ padding: '50px', maxWidth: "1600px", margin: "0 auto", height: "100%", minHeight: "800px" }}>
        {children}
      </Content>
      <PageFooter></PageFooter>
    </Layout>
  }</>
  )
}