// import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import React, { useEffect, useState } from 'react';

import token from '@/utils/token';
import { InboxOutlined } from '@ant-design/icons';

import styles from './index.module.less';

import type { RcFile, UploadProps } from 'antd/es/upload';
import type { UploadFile } from 'antd/es/upload/interface';
const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

const { Dragger } = Upload;

interface CoverProps {
  value?: string;
  onChange?: (value: string) => void;
}
const App: React.FC<CoverProps> = ({ value, onChange }) => {
  const [previewImage, setPreviewImage] = useState<string>();

  useEffect(() => {
    // 图片的回显
    setPreviewImage(value);
  }, [value]);

  const handlePreview = async (file: UploadFile) => {
    console.log('[file.url]: ', file.url);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
  };
  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: FILE_UPLOAD_URL,
    headers: {
      Authorization: 'Bearer ' + token.get(),
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        const { response } = info.file;
        handlePreview(info.file);
        onChange?.(response);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger accept='' {...props} className={styles['form-item-cover']}>
      <div
        className={styles['upload-wrapper']}
        style={{ backgroundImage: `url(${previewImage})` }}
      >
        <div className={styles['top-level-desc']}>
          <p style={{ fontSize: '2.5rem' }}>
            <InboxOutlined color='#fff' />
          </p>
          <p style={{ fontSize: '1.6rem', fontWeight: 500 }}>上传封面</p>
          <p style={{ fontSize: '0.8rem' }}>建议尺寸: 1303*734px</p>
        </div>
        {/* <img src={previewImage} alt='' className={styles['bt-preview']} /> */}
      </div>
    </Dragger>
  );
};

export default App;
