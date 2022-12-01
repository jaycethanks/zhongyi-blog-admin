import React from 'react';
import { Modal, Form, Input, Switch } from 'antd';
import type { FormInstance } from 'antd/es/form';

interface NewTagModalProps {
  open: boolean;
  onFinish: (values: any) => void;
  onModalClose: () => void;
}
const NewTagModal: React.FC<NewTagModalProps> = ({
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
        title='新增标签'
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
            label='标签名称'
            name='name'
            rules={[{ required: true, message: '标签名称未填写' }]}
          >
            <Input />
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
      </Modal>
    </>
  );
};

export default NewTagModal;
