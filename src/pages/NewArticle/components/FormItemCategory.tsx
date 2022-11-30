import React from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import styles from './FormItemCategory.module.less';

interface CategoryProps {
  value?: string;
  onChange?: (value: string) => void;
}
const App: React.FC<CategoryProps> = ({ value, onChange }) => {
  console.log('[value]: ', value);
  const handleOnChange = (e: RadioChangeEvent) => {
    onChange?.(e.target.value);
    console.log(`radio checked:${e.target.value}`);
  };
  return (
    <>
      <Radio.Group
        defaultValue={value}
        onChange={handleOnChange}
        className={styles['radio-group']}
      >
        <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
        <Radio.Button value='e'>Chengdu</Radio.Button>
        <Radio.Button value='f'>Chengdu</Radio.Button>
        <Radio.Button value='g'>Chengdu</Radio.Button>
        <Radio.Button value='h'>Chengdu</Radio.Button>
      </Radio.Group>
      {/* <Radio.Group onChange={onChange} defaultValue='a' style={{ marginTop: 16 }}>
      <Radio.Button value='a'>Hangzhou</Radio.Button>
      <Radio.Button value='b' disabled>
      Shanghai
      </Radio.Button>
      <Radio.Button value='c'>Beijing</Radio.Button>
      <Radio.Button value='d'>Chengdu</Radio.Button>
    </Radio.Group> */}
    </>
  );
};

export default App;
