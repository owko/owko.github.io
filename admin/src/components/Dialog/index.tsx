import React, { useState, useImperativeHandle } from "react";
import { Modal, Tabs, message } from "antd";
import type { TabsProps } from "antd";
import UserForm from "@/components/UserForm";
import { useDispatch } from 'react-redux';
import userStatus from "@/store/userStatus";
type DialogProps = {
  onRef: any;
};
const Dialog: React.FC<DialogProps> = (props: { onRef: any }) => {
  const [open, setOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  type NoticeType = "error" | "success" | "warning";
  let dispatch = useDispatch();
  useImperativeHandle(props.onRef, () => {
    // 需要将暴露的接口返回出去
    return {
      showModal: showModal,
    };
  });
  const withMessage = (type: NoticeType | undefined, content: String) => {
    messageApi.open({
      type,
      content,
    });
  };
  //弹窗逻辑
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  //标签页逻辑
  const onChange = (key: string) => {
    console.log(key);
  };
  type ElementProps = {
    submitText: String;
    handleCancel: () => void;
    onFinish: (values: any) => void;
  };
  //hoc组件
  function withUserForm(
    Element: React.FC<ElementProps>,
    text: String,
    onFinish: (values: any) => void
  ) {
    return (
      <Element
        submitText={text}
        onFinish={onFinish}
        handleCancel={handleCancel}
      ></Element>
    );
  }
  //登录与注册处理函数
  const LoginOnFinish = async ({
    username,
    password,
  }: {
    username: String;
    password: Number;
  }) => {
    let result = await dispatch(userStatus.asyncActions.handleLogin( {username, password} ))
    if (result === 'success') {
      withMessage("success", "登录成功!");
    } else {
      withMessage("error", result);
    }
    handleCancel();
  };
  const RegisterOnFinish = async ({
    username,
    password,
  }: {
    username: String;
    password: Number;
  }) => {
    let result = await dispatch(userStatus.asyncActions.handleLogin( {username, password}))
    if (result === 'success') {
      withMessage("success", "注册成功!");
    } else {
      withMessage("error", result);
    }
    handleCancel();
  };
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "登录",
      children: withUserForm(UserForm, "登录", LoginOnFinish),
    },
    {
      key: "2",
      label: "注册",
      children: withUserForm(UserForm, "注册", RegisterOnFinish),
    },
  ];
  return (
    <>
      {contextHolder}
      <Modal open={open} footer={null} onCancel={handleCancel} width={440}>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Modal>
    </>
  );
};

export default Dialog;
