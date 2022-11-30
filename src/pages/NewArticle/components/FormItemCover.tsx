import styles from './FormItemCover.module.less';
import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

const { Dragger } = Upload;

interface CoverProps {
  value?: string;
  onChange?: (value: string) => void;
}
const App: React.FC<CoverProps> = ({ value, onChange }) => {
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
      <p className='ant-upload-drag-icon'>
        <InboxOutlined />
      </p>
      <p className='ant-upload-text'>上传封面</p>
      <p className='ant-upload-hint'>建议尺寸: 1303*734px</p>
    </Dragger>
  );
};

export default App;
