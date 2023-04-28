import { Button, Drawer, Radio, Space } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

function Sidebarmobile() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(!open);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  return (
    <>
      <Space>
        <Button onClick={showDrawer}>
          {/* <span className="barsBtn"></span> */}
          <MenuOutlined />
        </Button>
      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        style={{ width: "50%" }}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default Sidebarmobile;
