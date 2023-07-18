import { Input,Button } from 'antd';
import styles from './index.module.less';
import { useState } from 'react';
import PathBasedSvg from "@/components/PathBasedSvg/PathBasedSvg"
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
  
  const parseValue = value && JSON.parse(value) as DynamicListItem[];
  // const parseValue = [
  //   {
  //     icon:"M465.189 161.792c-22.967 18.14-44.325 35.109-47.397 37.742l-5.851 4.68 10.971 8.632c5.998 4.827 11.85 9.508 13.02 10.532 1.17 1.024 17.993 14.336 37.156 29.696l34.962 27.795 5.267-3.95c2.925-2.194 23.259-18.432 45.348-35.986 21.943-17.555 41.253-32.768 42.716-33.646 1.609-1.024 2.779-2.194 2.779-2.78 0-0.438-9.655-8.63-21.504-17.846-11.995-9.363-22.674-17.847-23.845-18.871-15.945-13.02-49.737-39.059-50.76-39.059-0.586 0.147-19.896 14.922-42.862 33.061z m233.325 180.37C507.465 493.275 508.928 492.105 505.417 489.911c-3.072-1.902-11.556-8.485-64.073-50.03-9.07-7.168-18.578-14.775-21.358-16.823-2.78-2.194-8.777-6.875-13.312-10.532-4.68-3.657-10.679-8.339-13.312-10.533-13.165-10.24-71.095-56.027-102.107-80.457-5.852-4.681-11.41-8.485-12.142-8.485-0.731 0-10.971 7.754-22.674 17.116-11.703 9.508-22.674 18.286-24.284 19.456-1.755 1.17-5.12 3.95-7.46 6.144-2.34 2.34-4.828 4.096-5.413 4.096-3.072 0-0.731 3.072 6.437 8.777 4.096 3.218 8.777 6.875 10.094 8.046 1.316 1.024 10.24 8.045 19.748 15.506s23.26 18.286 30.428 23.99c19.31 15.215 31.89 25.308 127.853 101.084 47.836 37.742 88.796 69.779 90.844 71.095 3.657 2.487 3.95 2.487 7.46-0.292a1041.42 1041.42 0 0 0 16.092-12.727c6.875-5.413 14.775-11.703 17.554-13.897 30.135-23.699 80.018-63.05 81.774-64.512 1.17-1.024 12.434-9.802 24.868-19.603s37.888-29.696 56.32-44.324c18.579-14.629 46.227-36.425 61.733-48.567 15.506-12.142 27.794-22.528 27.502-23.26-0.878-1.17-57.637-47.104-59.978-48.274-0.731-0.439-18.578 12.727-39.497 29.257z",title:'123',url:'xxx'},
  //     {icon:"M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z",title:'1234',url:'xxx'},
  //     {icon:"M20 3.894a8.299 8.299 0 0 1-2.357.636a4.062 4.062 0 0 0 1.804-2.234a8.298 8.298 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04c0 .316.036.624.106.92a11.71 11.71 0 0 1-8.457-4.22a3.974 3.974 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.143 4.143 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.189 4.189 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.317 8.317 0 0 1-5.096 1.73A8.42 8.42 0 0 1 0 16.185A11.747 11.747 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492c0-.175-.004-.35-.012-.523A8.249 8.249 0 0 0 20 3.895Z",title:'12345',url:'xxx'},
  //     {icon:"M8.5 21c2-2-.5-6 3.5-6m0 0c-3 0-7-1-7-5c0-1.445.116-2.89.963-4V3L9 4.283C9.821 4.101 10.81 4 12 4s2.178.1 3 .283L18 3v2.952c.88 1.116 1 2.582 1 4.048c0 4-4 5-7 5Zm0 0c4 0 1.5 4 3.5 6M3 15c3 0 1.5 4 6 3",title:'123456',url:'xxx'}
  //   ]
  
  const [links,setLinks] =  useState(parseValue || [])
  const handleAdd = ()=>{
    setLinks([...links,{icon:"",title:"",url:''}])
  }
  // const [number, setNumber] = useState(0);
  // const [currency, setCurrency] = useState<Currency>('rmb');

  // const triggerChange = (changedValue: { number?: number; currency?: Currency }) => {
  //   onChange?.({ number, currency, ...value, ...changedValue });
  // };


  const onInputChange = function(e: React.ChangeEvent<HTMLInputElement>,index: number) {
    const field = e.target.attributes['data-type'].value
    links[index][field] = e.target.value
    setLinks([...links])
    console.log('[links]: ',links)
    onChange?.(JSON.stringify(links));
  }


  return (
    <span>
      {
        links.map((link,index)=>(<div key={index} className={`${styles['link-item']}`}>
          Title:
          <Input  type="text" data-type='title' value={link.title } onChange={(e)=>onInputChange(e,index)}  />
          Icon Path:
          <Input  type="text" data-type='icon' value={link.icon }   onChange={(e)=>onInputChange(e,index)}  />
          Url:
          <Input  type="text" data-type='url' value={link.url } onChange={(e)=>onInputChange(e,index)}  />
          <li className={`${styles['preview-box']}`} key={index}>
            <a
              title={link.title}
              href={link.url}
              target="_blank"
              key={index}
              className={`${styles['preview-link']}`}
            >
              {/* svg viewBox 可能各有不同，如果写死，有的svg 就渲染不出来  */}
              <PathBasedSvg key={index}>
                <path
                  key={link.icon}
                  d={link.icon}
                ></path>
              </PathBasedSvg>
            </a>
          </li>
        </div>))
      }
      <Button type="primary" onClick={handleAdd}>新增</Button>
    
    </span>
  );
};

export default FormItemDynamicList;
