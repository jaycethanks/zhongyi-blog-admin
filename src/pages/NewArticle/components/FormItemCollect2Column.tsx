import styles from './FormItemCollect2Column.module.less';

import React from 'react';
import { Select } from 'antd';

const App: React.FC = () => (
  <Select
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
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Communicated',
      },
      {
        value: '4',
        label: 'Identified',
      },
      {
        value: '5',
        label: 'Resolved',
      },
      {
        value: '6',
        label: 'Cancelled',
      },
    ]}
  />
);

export default App;
