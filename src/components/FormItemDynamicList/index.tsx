import { Input,Button } from 'antd';
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
  const parseValue = [{icon:"M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z",title:'123',url:'xxx'},{icon:"abcde",title:'1234',url:'xxx'},{icon:"abcd",title:'12345',url:'xxx'},{icon:"abcd",title:'123456',url:'xxx'}]
  
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
          Title:
          <Input  type="text" value={link.title } onChange={onInputChange}  />
          Icon Path:
          <Input  type="text" value={link.icon } onChange={onInputChange}  />
          Url:
          <Input  type="text" value={link.url } onChange={onInputChange}  />
          <div className='preview-box'>
          <li key={index}>
                      <a
                        title={link.title}
                        href={link.url}
                        target="_blank"
                        key={index}
                        className={`flex items-center justify-center bg-BG_MAIN_DEEP p-2 transition-colors duration-TRANSITION_DURATION dark:bg-DARK_BG_MAIN_DEEP`}
                      >
                        <svg viewBox="0 0 1024 1024" width="16" height="16">
                          <path
                            key={index}
                            d={link.icon}
                            className=" fill-TEXT_MAIN transition-colors duration-TRANSITION_DURATION dark:fill-DARK_TEXT_MAIN"
                          ></path>
                         
                        </svg>
                      </a>
                    </li>
          </div>
        </div>))
      }
      <Button type="primary" >新增</Button>
    
    </span>
  );
};

export default FormItemDynamicList;
