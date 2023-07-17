import { Form, Input,  Switch, Upload } from 'antd';
import React, { useEffect } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import FormItemDynamicList  from "@/components/FormItemDynamicList"
const { TextArea } = Input;
const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
interface NewColumnModalProps {
  open: boolean;
  type: 'add' | 'edit';
  onValidateFinish: (values: any) => void;
  onModalClose: any;
  initialValues?: API.Column;
}

const Setting: React.FC<NewColumnModalProps> = ({
  onValidateFinish,
  initialValues,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues === undefined) {
      form.resetFields();
    } else {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues]);

  const onFinishFailed = () => {
    console.warn('modal validate failed');
  };

  return (
    <>
        <Form
          initialValues={{
            visible: true,
          }}
          form={form}
          name='basic'
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 20 }}
          onFinish={(values) =>
            onValidateFinish({ colid: initialValues?.colid, ...values })
          }
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          
          <Form.Item label="头像" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
          
          
          <Form.Item
            label='专栏简介'
            name='msg'
            rules={[{ required: true, message: '专栏简介未填写' }]}
          >
            <TextArea
              maxLength={1000}
              showCount
              autoSize={{ minRows: 6, maxRows: 8 }}
            />
          </Form.Item>

 
          <Form.Item
            label='社区链接'
            name='links'
            rules={[{ required: false }]}
          >
            <FormItemDynamicList/>
          </Form.Item>
        </Form>
    </>
  );
};

export default Setting;
