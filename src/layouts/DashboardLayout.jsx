
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileAddOutlined, HomeOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo text-center my-6 text-3xl text-white font-bold" >Shoe Shop</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="all-products">All Products</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileAddOutlined />}>
            <Link to="add-products">Add Product</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

// import { Link, Outlet } from "react-router-dom";

// const DashboardLayout = () => {
//   return (
//     <div className="grid grid-cols-12">
//       <div className="col-span-2 bg-gray-300 min-h-screen p-12">
//         <ul>
//           <li className="border border-black p-4 text w-full">
//             <Link to={"home"}>Dashboard</Link>
//           </li>
//           <li className="border border-black p-4 text w-full">
//             <Link to={"all-products"}>All Products</Link>
//           </li>
//           <li className="border border-black p-4 text w-full">
//             <Link to={"add-products"}>Add Product</Link>
//           </li>
//           <li className="border border-black p-4 text w-full">
//             <Link to={"/"}>Home</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="col-span-10 p-20">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
