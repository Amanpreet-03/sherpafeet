import React from 'react'
import { Layout } from 'antd'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import Color from 'color';

const { Header, Content, Footer, Sider } = Layout;

/*
 * We'll start with just one theme for now. Define colors and other styles here.
 * More themes can be easily added later. Look in ./App.js to see where this
 * theme is actually used.
 */

 /*
const mainTheme = {
  primaryColor: Color('#fd3d57'),
  primaryTextColor: Color('#fff'),
};

const defaultTheme = mainTheme;

// Inject global styles - seems to be the only way to customize Ant Design
// PLEASE ADD STYLES IN ALPHABETICAL ORDER for everyone's sanity. Thanks.
injectGlobal`
  .ant-btn {
    &:hover {
      border-color: ${defaultTheme.primaryColor
        .lighten(0.2)
        .toString()} !important;
      color: ${defaultTheme.primaryColor.lighten(0.2).toString()} !important;
    }

    &:active {
      border-color: ${defaultTheme.primaryColor
        .darken(0.2)
        .toString()} !important;
      color: ${defaultTheme.primaryColor.darken(0.2).toString()} !important;
    }
  }

  .ant-btn-primary {
    background-color: ${defaultTheme.primaryColor.toString()} !important;
    border-color: ${defaultTheme.primaryColor.toString()} !important;
    color: ${defaultTheme.primaryTextColor.toString()} !important;

    &:hover {
      background-color: ${defaultTheme.primaryColor
        .lighten(0.2)
        .toString()} !important;
      border-color: ${defaultTheme.primaryColor
        .lighten(0.2)
        .toString()} !important;
      color: ${defaultTheme.primaryTextColor.toString()} !important;
    }

    &:active {
      background-color: ${defaultTheme.primaryColor
        .darken(0.2)
        .toString()} !important;
      border-color: ${defaultTheme.primaryColor
        .darken(0.2)
        .toString()} !important;
      color: ${defaultTheme.primaryTextColor.toString()} !important;
    }
  }

  .ant-btn-clicked:after {
    border: 0 solid ${defaultTheme.primaryColor.toString()} !important;
  }

  .ant-switch-checked {
    background-color: ${defaultTheme.primaryColor.toString()} !important;
    border-color: ${defaultTheme.primaryColor.toString()} !important;
  }
`; */

export default () => 
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider style={{ overflow: 'auto', height: '100vh'}}>left sidebar</Sider>
     <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
