import styles from './EditorHeader.module.less';
import { Input, Button, Popover, Form, Switch } from 'antd';
const { TextArea } = Input;
import FormItemAddTag from './FormItemAddTag';
import FormItemCategory from './FormItemCategory';
import FormItemCover from './FormItemCover';
import FormItemCollect2Column from './FormItemCollect2Column';

const text = <div className={styles['header']}>发布文章</div>;
const onFinish = () => {};
const onFinishFailed = () => {};
const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};
const content = () => {
  const [form] = Form.useForm();
  const onOk = () => {
    console.log('click');
    form.validateFields();
    form.submit();
  };
  return (
    <>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='分类'
          name='category'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <FormItemCategory />
        </Form.Item>
        <Form.Item
          label='添加标签'
          name='tags'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <FormItemAddTag />
        </Form.Item>
        <Form.Item
          label='文章封面'
          name='cover'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <FormItemCover />
        </Form.Item>

        <Form.Item
          label='收录至专栏'
          name='column'
          rules={[{ required: false }]}
        >
          <FormItemCollect2Column />
        </Form.Item>

        <Form.Item
          label='发布到Banner'
          name='isbanner'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Switch defaultChecked onChange={onChange} />
        </Form.Item>

        <Form.Item
          label='编辑摘要'
          name='description'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <TextArea
            rows={2}
            maxLength={100}
            showCount
            autoSize={{ minRows: 2, maxRows: 2 }}
          />
        </Form.Item>

        <Form.Item
          label='阅读密码'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <div className={styles['footer']}>
        <Button ghost type='primary'>
          取消
        </Button>
        <Button type='primary' onClick={onOk}>
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
