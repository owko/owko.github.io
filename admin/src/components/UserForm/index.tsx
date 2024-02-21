import {  Button, Form, Input } from 'antd';
type FormProps = {
  handleCancel:() => void,
  submitText:String,
  onFinish:(values: any) => void
}
const UserForm:React.FC<FormProps> =({handleCancel,submitText,onFinish})=>{
      //表单逻辑
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    username?: string;
    password?: string;
  };
    return(
        <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 28 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入你的用户名!' },{ max:10, message: '名称不超过10个字符' },{ pattern: new RegExp(/^[0-9a-zA-Z_]{1,}$/, "g") , message: '名称只允许包含数字、字母和下划线' } ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入你的密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 15}}>
        <Button style={{marginRight:'20px'}} onClick={handleCancel}>
            取消
          </Button>
          <Button type="primary" htmlType="submit">
            {submitText}
          </Button>
        </Form.Item>
      </Form>
    )
}
export default UserForm;