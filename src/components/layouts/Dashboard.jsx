
import pageRoutes from '../../config/Router';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Col, Typography } from "antd";
import Todolist from '../../pages/Todolist';
const { Header, Content, Sider } = Layout;

const DashBoard = () => {
    // em tính sử dụng antd layout mà install không được .
    // cung tinh dung config mà install react - dom mà không được
    return (
      <Layout>
        <Router>
          
          <Header>
          </Header>

          <Layout style={{display : 'flex', justifyContent : 'center'}}>

            <Col span={8}>
                <Content>
                  <Routes>
                          {pageRoutes.map((route, index) => {
                            const Page = route.element;
                            return (
                              <Route key={index} element={<Page />} path={route.path} />
                            );
                          })}
                  </Routes>
                </Content>
            </Col>

          </Layout>

        </Router>
      </Layout>
    )
}

export default DashBoard;

















