import { Input } from 'antd';
import styles from './index.module.less';
import { useState } from 'react';

interface DynamicList {
  value?: string;
  onChange?: (value: string) => void;
}
type DynamicListItem = {
  icon?: string;
  title: string;
  url: string;
};
const FormItemDynamicList: React.FC<DynamicList> = ({ value, onChange }) => {
  
  // const parseValue = value && JSON.parse(value) as DynamicListItem[];
  const parseValue = [{icon:"abcd",title:'123',url:'xxx'},{icon:"abcde",title:'1234',url:'xxx'},{icon:"abcd",title:'12345',url:'xxx'},{icon:"abcd",title:'123456',url:'xxx'}]
  
  const [links,setLinks] =  useState(parseValue || [])
  // const [number, setNumber] = useState(0);
  // const [currency, setCurrency] = useState<Currency>('rmb');

  // const triggerChange = (changedValue: { number?: number; currency?: Currency }) => {
  //   onChange?.({ number, currency, ...value, ...changedValue });
  // };

  // const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newNumber = parseInt(e.target.value || '0', 10);
  //   if (Number.isNaN(number)) {
  //     return;
  //   }
  //   if (!('number' in value)) {
  //     setNumber(newNumber);
  //   }
  //   triggerChange({ number: newNumber });
  // };
  const onInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    console.log('[e.target.value]: ',e.target.value)
  }

  // const onCurrencyChange = (newCurrency: Currency) => {
  //   if (!('currency' in value)) {
  //     setCurrency(newCurrency);
  //   }
  //   triggerChange({ currency: newCurrency });
  // };

  return (
    <span>
      {
        links.map((link,index)=>(<div key={index} className={`${styles['link-item']}`}>
          <Input  type="text" value={link.title } onChange={onInputChange} style={{ width: 100 }} />
          <Input  type="text" value={link.icon } onChange={onInputChange} style={{ width: 100 }} />
          <Input  type="text" value={link.url } onChange={onInputChange} style={{ width: 100 }} />
        </div>))
      }
    
    </span>
  );
};

export default FormItemDynamicList;
