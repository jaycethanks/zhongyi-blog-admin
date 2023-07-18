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
  square?: boolean; // 是否是正方型
  title?: string; // title
  subTitlt?: string; // subTitlt
  UploadProp?:UploadProps
}
const App: React.FC<CoverProps> = ({ value, onChange, square, title, subTitlt,UploadProp }) => {
  const [previewImage, setPreviewImage] = useState<string>();

  useEffect(() => {
    // 图片的回显
    setPreviewImage(value);
  }, [value]);

  const handlePreview = async (file: UploadFile) => {
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
      console.log('[info]: ',info)
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
  const className = `${square ? styles['form-item-cover-square'] : ''} ${styles['form-item-cover']}`
  return (
    <Dragger
      accept=""
      {...props}
      className={className}
      {...UploadProp}
    >
      <div className={styles['upload-wrapper']} style={{ backgroundImage: `url(${previewImage})` }}>
        <div className={styles['top-level-desc']}>
          <p style={{ fontSize: '2.5rem' }}>
            <InboxOutlined color="#fff" />
          </p>
          <p style={{ fontSize: '1.6rem', fontWeight: 500 }}>{title ?? '上传封面'}</p>
          <p style={{ fontSize: '0.8rem' }}>{subTitlt ?? '建议尺寸: 1303*734px'}</p>
        </div>
        {/* <img src={previewImage} alt='' className={styles['bt-preview']} /> */}
      </div>
    </Dragger>
  );
};

export default App;
