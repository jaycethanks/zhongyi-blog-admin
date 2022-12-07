import { Radio } from 'antd';
import React, { useEffect, useState } from 'react';

import { getCategorys } from '@/services/api/content';
import { useRequest } from '@umijs/max';

import styles from './FormItemCategory.module.less';

import type { RadioChangeEvent } from 'antd';
interface CategoryProps {
  value?: string;
  onChange?: (value: string) => void;
}
const App: React.FC<CategoryProps> = ({ value, onChange }) => {
  type RadioGroupOpt = {
    label: string;
    value: string;
  };
  const [options, setOptions] = useState<RadioGroupOpt[]>([]);
  const { data, error, loading } = useRequest(() => {
    return getCategorys();
  });
  useEffect(() => {
    if (data) {
      const opts = data.map((it) => ({
        label: it.name,
        value: it.tagid,
      })) as RadioGroupOpt[];
      setOptions(opts);
    }
  }, [data]);

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
        {options.map((it) => {
          return <Radio.Button value={it.value}>{it.label}</Radio.Button>;
        })}
        {/* <Radio.Button value='a'>Hangzhou</Radio.Button>
        <Radio.Button value='b'>Shanghai</Radio.Button>
        <Radio.Button value='c'>Beijing</Radio.Button>
        <Radio.Button value='d'>Chengdu</Radio.Button>
        <Radio.Button value='e'>Chengdu</Radio.Button>
        <Radio.Button value='f'>Chengdu</Radio.Button>
        <Radio.Button value='g'>Chengdu</Radio.Button>
        <Radio.Button value='h'>Chengdu</Radio.Button> */}
      </Radio.Group>
    </>
  );
};

export default App;
