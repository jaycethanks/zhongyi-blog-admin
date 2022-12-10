import 'bytemd/dist/index.css';

import { Button, Form, Input, message, Popover, Switch } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, useRequest } from 'umi';

import FormItemUpload from '@/components/FormItemUpload';
import Loading from '@/components/Loading';
import { upsert as createArticle } from '@/services/api/article';
import { getArticleByid } from '@/services/api/content';
import gfm from '@bytemd/plugin-gfm';
import { Editor, Viewer } from '@bytemd/react';
import { history } from '@umijs/max';

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
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
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
        const {
          title,
          content,
          artid,
          visible,
          banner,
          category,
          catid,
          column,
          colid,
          tags,
          ...rest
        } = data;
        setTitle(title);
        setContent(content);
        // 数据转换一下,数据库直接返回数据格式不可用
        const editData = {
          visible: visible === 1 ? true : false,
          banner: banner === 1 ? true : false,
          category: catid,
          column: colid,
          tags: (tags as Array<{ tagid: string }>).map((tag) => tag.tagid),
          ...rest,
        };
        setFormData(editData);
      }
    }, [data]);

    if (loading) {
      return <Loading />;
    }
  }

  /**
   *
   * @param type 1: 发布 0:草稿
   */
  const onSubmit = async (type: 0 | 1) => {
    await form.validateFields();
    const formValues = await form.getFieldsValue();
    const { banner, visible, ...rest } = formValues;
    if (!title) {
      message.error('标题不可为空');
      return;
    }

    const res = await createArticle({
      artid: artid ? artid : undefined,
      title,
      content,
      status: type, // 发布
      visible: visible ? 1 : 0,
      banner: banner ? 1 : 0,
      ...rest,
    });
    if (res.code === 0) {
      message.success(res.message);
      setOpen(false);
      // const urlParams = new URL(window.location.href).searchParams;
      // history.push(urlParams.get('redirect') || '/');
      navigate(-1);
    } else {
      message.error(res.message);
    }
  };

  const onFinishFailed = () => {
    setOpen(false);
  };
  const PopoverContent: React.FC = (_rest) => {
    useEffect(() => {
      if (formData) {
        form.setFieldsValue(formData);
      }
    }, [formData]);

    //  发布 PopoverForm 表单
    return (
      <>
        <Form
          form={form}
          name='basic'
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 19 }}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          initialValues={{
            visible: true,
            banner: false,
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
            name='banner'
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
          <Button ghost danger type='dashed' onClick={() => setOpen(false)}>
            取消
          </Button>
          <Button ghost type='primary' onClick={() => onSubmit(0)}>
            保存到草稿箱
          </Button>
          <Button type='primary' onClick={() => onSubmit(1)}>
            确定发布
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
          <Popover
            open={open}
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
            <Button type='primary' onClick={() => setOpen(true)}>
              {isEdit ? '更新' : '发布'}
            </Button>
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
