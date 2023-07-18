import { Button, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import FormItemDynamicList from '@/components/FormItemDynamicList';
import FormItemUpload from '@/components/FormItemUpload';
import {upsert as createAbout} from "@/services/api/settingAbout"
const { TextArea } = Input;

interface NewColumnModalProps {
  open: boolean;
  type: 'add' | 'edit';
  onValidateFinish: (values: any) => void;
  onModalClose: any;
  initialValues?: API.Column;
}

const Setting: React.FC<NewColumnModalProps> = ({ onValidateFinish, initialValues }) => {
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
  const handleSave = async (type: 0 | 1) => {
    await form.validateFields();
    const formValues = await form.getFieldsValue();
    const { avatar, msg, links } = formValues;


    const res = await createAbout({
      avatar,msg,links
    });
    if (res.code === 0) {
      message.success(res.message);
      // const urlParams = new URL(window.location.href).searchParams;
      // history.push(urlParams.get('redirect') || '/');
    } else {
      message.error(res.message);
    }
  };

  return (
    <>
      <Form
        initialValues={{
          visible: true,
        }}
        form={form}
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        onFinish={(values) => onValidateFinish({ colid: initialValues?.colid, ...values })}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="头像" name="avatar">
          <FormItemUpload square title="上传" subTitlt='建议尺寸' UploadProp={{maxCount:1}}/>
        </Form.Item>
        <Form.Item label="专栏简介" name="msg" rules={[{ required: true, message: '专栏简介未填写' }]}>
          <TextArea maxLength={1000} showCount autoSize={{ minRows: 6, maxRows: 8 }} />
        </Form.Item>
        <Form.Item label="社区链接" name="links" rules={[{ required: false }]}>
          <FormItemDynamicList />
        </Form.Item>
      </Form>
      <p style={{ textAlign: 'right' }}>
        <Button type="primary" onClick={handleSave}>
          保存更改
        </Button>
      </p>
    </>
  );
};

export default Setting;
