import React from 'react';
import { Modal, Form, Input, Switch } from 'antd';
const { TextArea } = Input;
import type { FormInstance } from 'antd/es/form';

interface NewCateModalProps {
  open: boolean;
  onFinish: (values: any) => void;
  onModalClose: () => void;
}
const NewCateModal: React.FC<NewCateModalProps> = ({
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
        title='新增分类'
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
            label='分类名称'
            name='name'
            rules={[{ required: true, message: '分类名称未填写' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='分类描述'
            name='description'
            rules={[{ required: true, message: '分类描述未填写' }]}
          >
            <TextArea
              rows={2}
              maxLength={30}
              showCount
              autoSize={{ minRows: 2, maxRows: 2 }}
            />
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

export default NewCateModal;
