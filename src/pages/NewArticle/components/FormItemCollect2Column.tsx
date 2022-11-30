import styles from './FormItemCollect2Column.module.less';

import React from 'react';
import { Select } from 'antd';

interface ColumnProps {
  value?: string;
  onChange?: (value: string) => void;
}
const App: React.FC<ColumnProps> = ({ value, onChange }) => {
  const handleChange = (value: string) => {
    onChange?.(value);
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue={value}
      onChange={handleChange}
      className={styles['form-item-column']}
      showSearch
      placeholder='选择收录至专栏'
      optionFilterProp='children'
      filterOption={(input, option) => (option?.label ?? '').includes(input)}
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? '')
          .toLowerCase()
          .localeCompare((optionB?.label ?? '').toLowerCase())
      }
      options={[
        {
          value: '1',
          label: '中国',
        },
        {
          value: '4',
          label: '爱你',
        },
        {
          value: '5',
          label: '爱我',
        },
        {
          value: '2',
          label: '中央',
        },
        {
          value: '3',
          label: '衷心',
        },
        {
          value: '6',
          label: 'Cancelled',
        },
      ]}
    />
  );
};

export default App;
