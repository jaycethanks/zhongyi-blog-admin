import React from 'react';
import { Modal, Form, Input } from 'antd';
const { TextArea } = Input;
import type { FormInstance } from 'antd/es/form';
import FormItemUpload from '@/components/FormItemUpload';

interface NewColumnModalProps {
  open: boolean;
  onFinish: (values: any) => void;
  onModalClose: () => void;
}
const NewColumnModal: React.FC<NewColumnModalProps> = ({
  open,
  onFinish,
  onModalClose,
}) => {
  const [form] = Form.useForm();

  const onFinishFailed = () => {
    console.log('onFinishFailed');
  };
  const onModalOk = (form: FormInstance) => {
    form.validateFields();
    form.submit(); // 将会触发 onFinish
  };
  return (
    <>
      <Modal
        transitionName=''
        maskTransitionName=''
        title='新增专栏'
        centered
        open={open}
        onOk={() => onModalOk(form)}
        onCancel={() => onModalClose()}
        width={'40rem'}
      >
        <Form
          form={form}
          name='basic'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          initialValues={{
            category: 'c',
            isbanner: false,
            tags: 'default tag',
          }}
          onFinish={(values) => onFinish(values)}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label='专栏名称'
            name='password'
            rules={[{ required: true, message: '专栏名称未填写' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='专栏简介'
            name='description'
            rules={[{ required: true, message: '专栏简介未填写' }]}
          >
            <TextArea
              rows={2}
              maxLength={100}
              showCount
              autoSize={{ minRows: 2, maxRows: 2 }}
            />
          </Form.Item>

          <Form.Item
            label='文章封面'
            name='cover'
            rules={[{ required: false }]}
          >
            <FormItemUpload />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewColumnModal;
