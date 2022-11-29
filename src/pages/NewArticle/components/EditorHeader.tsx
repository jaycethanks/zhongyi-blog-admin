import styles from './EditorHeader.module.less';
import { Input, Button, Popover, Form } from 'antd';
console.log('[styles]: ', styles);
const text = <span>Title</span>;
const onFinish = () => {};
const onFinishFailed = () => {};
const content = () => {
  const onOk = () => {
    form.submit();
  };
  const [form] = Form.useForm();
  return (
    /**
     * 分类
     * 标签
     * 文章封面
     * 收录至专栏
     * 编辑摘要
     */
    <>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 16 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className={styles['footer']}>
        <Button ghost type='primary'>
          取消
        </Button>
        <Button type='primary' onClick={() => onOk}>
          确定发布
        </Button>
      </div>
    </>
  );
};
export default () => {
  return (
    <header className={styles['editor-header']}>
      <Input bordered={false} placeholder='起一个响亮的标题吧' />
      <div className={styles['btn-group']}>
        <Button ghost type='primary'>
          草稿箱
        </Button>
        <Popover
          placement='bottomRight'
          title={text}
          open
          content={content}
          trigger='click'
          overlayClassName={styles['submit-overlay']}
        >
          <Button type='primary'>发布</Button>
        </Popover>
      </div>
    </header>
  );
};
