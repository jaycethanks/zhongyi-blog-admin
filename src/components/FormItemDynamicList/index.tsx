import { Input,Button } from 'antd';
import styles from './index.module.less';
import {  useEffect, useState } from 'react';
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
  const [links,setLinks] = useState([])
  
  useEffect(() => {
    const parseValue = value ? JSON.parse(value) as DynamicListItem[] : [];
    console.log('parseValue',parseValue)
    console.log('links',links)
    setLinks(parseValue)
  
  }, [value])
  
  const handleAdd = ()=>{
    setLinks([...links,{icon:"",title:"",url:''}])
  }
  const onInputChange = function(e: React.ChangeEvent<HTMLInputElement>,index: number) {
    // const field = e.target.attributes['data-type'].value
    // links[index][field] = e.target.value
    // setLinks([...links])
    // onChange?.(JSON.stringify(links));
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
