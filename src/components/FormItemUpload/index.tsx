import styles from './index.module.less';
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
// import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { useState } from 'react';
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
  const [previewImage, setPreviewImage] = useState('');

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
  };

  const props: UploadProps = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:4567/file/upload',
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
    <Dragger {...props} className={styles['form-item-cover']}>
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