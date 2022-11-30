import React from 'react';
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import styles from './FormItemAddTag.module.less';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

interface AddtagProps {
  value?: string;
  onChange?: (value: string) => void;
}
const FormItemAddTag: React.FC<AddtagProps> = ({ value, onChange }) => {
  const handleChange = (value: string) => {
    onChange?.(value);
    console.log(`selected ${value}`);
  };
  return (
    <Select
      defaultValue={value}
      showArrow
      mode='tags'
      style={{ width: '100%' }}
      placeholder='添加标签'
      onChange={handleChange}
      options={options}
      className={styles['select-tag']}
    />
  );
};

export default FormItemAddTag;
