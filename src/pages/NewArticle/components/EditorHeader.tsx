import { Button, Form, Input, Popover, Switch } from 'antd';
import { useState } from 'react';

import FormItemUpload from '@/components/FormItemUpload';

import styles from './EditorHeader.module.less';
import FormItemAddTag from './FormItemAddTag';
import FormItemCategory from './FormItemCategory';
import FormItemCollect2Column from './FormItemCollect2Column';

const { TextArea } = Input;
const onFinish = (
  values: any,
  {
    title,
    mainContent,
  }: {
    title: string;
    mainContent: string;
  },
) => {
  console.log('[values]: ', values);
  console.log('[title]: ', title);
  console.log('[mainContent]: ', mainContent);
  console.log('onFinish');
};
const onFinishFailed = () => {
  console.log('onFinishFailed');
};

const EditorHeader: React.FC<{ mainContent: string }> = ({ mainContent }) => {
  const [title, setTitle] = useState('');
  return (
    <header className={styles['editor-header']}>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        bordered={false}
        placeholder='起一个响亮的标题吧'
      />
      <div className={styles['btn-group']}>
        <Button ghost type='primary'>
          草稿箱
        </Button>
        <Popover
          transitionName=''
          placement='bottomRight'
          title={<div className={styles['header']}>发布文章</div>}
          content={PopoverContent({ title: title, mainContent: mainContent })}
          trigger='click'
          overlayClassName={styles['submit-overlay']}
        >
          <Button type='primary'>发布</Button>
        </Popover>
      </div>
    </header>
  );
};

const PopoverContent: React.FC<{
  title: string;
  mainContent: string;
}> = ({ title, mainContent }) => {
  const [form] = Form.useForm();
  const onSubmit = () => {
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
        initialValues={{ category: 'c', isbanner: false, tags: 'default tag' }}
        onFinish={(values) => onFinish(values, { title, mainContent })}
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
          <FormItemUpload />
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
        <Form.Item
          label='是否可见'
          name='visible'
          valuePropName='checked'
          rules={[{ required: false }]}
        >
          <Switch />
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
export default EditorHeader;
