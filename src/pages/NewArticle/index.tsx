import 'bytemd/dist/index.css';

import { Button, Form, Input, Popover, Switch } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'umi';

import FormItemUpload from '@/components/FormItemUpload';
import Loading from '@/components/Loading';
import { create as createArticle } from '@/services/api/article';
import { getArticleByid } from '@/services/api/content';
import gfm from '@bytemd/plugin-gfm';
import { Editor, Viewer } from '@bytemd/react';

import FormItemAddTag from './components/FormItemAddTag';
import FormItemCategory from './components/FormItemCategory';
import FormItemCollect2Column from './components/FormItemCollect2Column';
import styles from './index.module.less';

const { TextArea } = Input;

const plugins = [
  gfm(),
  // Add more plugins here
];

const NewArticle = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const { artid } = useParams();
  const [formData, setFormData] = useState<any>();
  if (artid) {
    // 有artid 则是编辑状态
    const { data, error, loading } = useRequest(() => {
      return getArticleByid(artid);
    });

    useEffect(() => {
      setIsEdit(true);
      if (data) {
        const { title, content, artid: _artid, ...rest } = data;
        setTitle(title);
        setContent(content);
        setFormData(rest);
      }
    }, [data]);

    if (loading) {
      return <Loading />;
    }
  }
  const onFinish = async (values: any) => {
    const res = await createArticle({
      artid: artid ? artid : undefined,
      title,
      content,
      ...values,
    });
    console.log('[artid]: ', artid);
    console.log('[title]: ', title);
    console.log('[form]: ', values);
    console.log('[content]: ', content);
    console.log('onFinish');
  };
  const onFinishFailed = () => {
    console.log('onFinishFailed');
  };
  const PopoverContent: React.FC = (_rest) => {
    const [form] = Form.useForm();
    useEffect(() => {
      if (formData) {
        form.setFieldsValue(formData);
      }
    }, [formData]);
    const onSubmit = () => {
      form.validateFields();
      form.submit(); //将会触发 onFinish 方法
    };

    //  发布 PopoverForm 表单
    return (
      <>
        <Form
          form={form}
          name='basic'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          onFinish={(values) => onFinish(values)}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          initialValues={{
            visible: true,
          }}
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
          <Form.Item
            label='文章封面'
            name='cover'
            rules={[{ required: false }]}
          >
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
            {isEdit ? '确定更新' : '确定发布'}
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      {/* 头部操作区域 */}
      <header className={styles['editor-header']}>
        {/* 左侧标题录入 */}
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          bordered={false}
          placeholder='起一个响亮的标题吧'
        />
        {/* 右侧草稿箱 + 发布 */}
        <div className={styles['btn-group']}>
          <Button ghost type='primary'>
            保存到草稿箱
          </Button>
          <Popover
            transitionName=''
            placement='bottomRight'
            title={
              <div className={styles['header']}>
                {isEdit ? '更新文章' : '发布文章'}
              </div>
            }
            content={PopoverContent}
            trigger='click'
            overlayClassName={styles['submit-overlay']}
          >
            <Button type='primary'>{isEdit ? '更新' : '发布'}</Button>
          </Popover>
        </div>
      </header>

      {/* markdown 编辑器 */}
      <div className={styles.main}>
        <Editor
          value={content}
          plugins={plugins}
          onChange={(v) => {
            setContent(v);
          }}
        />
      </div>
    </>
  );
};
export default NewArticle;
