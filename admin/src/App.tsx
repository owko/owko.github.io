import { ConfigProvider } from "antd";
// import { UpCircleOutlined } from "@ant-design/icons";
import { RouterBeforeEach } from "@/router";
import { useRoutes } from "react-router-dom";
import router from "./router";
function App() {
  const Outlet = useRoutes(router)
  return (
    <RouterBeforeEach>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token，影响范围大
            colorPrimary: '#218a4b',
            borderRadius: 2,
          },
        }}
      >
        {Outlet}
      </ConfigProvider>
    </RouterBeforeEach>
  );
}

export default App;
