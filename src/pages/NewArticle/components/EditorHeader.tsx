import styles from './EditorHeader.module.less';
import { Input, Button, Popover, Form, Switch } from 'antd';
const { TextArea } = Input;
import FormItemAddTag from './FormItemAddTag';
import FormItemCategory from './FormItemCategory';
import FormItemCover from './FormItemCover';
import FormItemCollect2Column from './FormItemCollect2Column';

const text = <div className={styles['header']}>发布文章</div>;
const onFinish = (e) => {
  console.log('[e]: ', e);
  console.log('onFinish');
};
const onFinishFailed = () => {
  console.log('onFinishFailed');
};
// const onChange = (checked: boolean) => {
//   console.log(`switch to ${checked}`);
// };

const content = () => {
  const [form] = Form.useForm();
  const onSubmit = () => {
    console.log('click');
    form.validateFields();
    form.submit();
    window.fff = form;
  };
  return (
    <>
      <Form
        form={form}
        name='basic'
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        initialValues={{ category: 'c', isbanner: false, tags: 'default tag' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='分类'
          name='category'
          rules={[{ required: true, message: '分类未选择' }]}
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
        <Form.Item label='文章封面' name='cover' rules={[{ required: false }]}>
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
          valuePropName='checked'
          rules={[{ required: false }]}
        >
          <Switch />
        </Form.Item>

        <Form.Item
          label='编辑摘要'
          name='description'
          rules={[{ required: true, message: '未填写文章摘要' }]}
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
          rules={[{ required: false }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
      <div className={styles['footer']}>
        <Button ghost type='primary'>
          取消
        </Button>
        <Button type='primary' onClick={onSubmit}>
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
