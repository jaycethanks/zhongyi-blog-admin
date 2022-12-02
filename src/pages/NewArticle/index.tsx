import 'bytemd/dist/index.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequest } from 'umi';

import EditorHeader from '@/pages/NewArticle/components/EditorHeader';
import { getArticleByid } from '@/services/api/contentManage';
import gfm from '@bytemd/plugin-gfm';
import { Editor, Viewer } from '@bytemd/react';

import styles from './index.module.less';

const plugins = [
  gfm(),
  // Add more plugins here
];
export default () => {
  const [value, setValue] = useState('');
  const { artid } = useParams();
  // const { data, error, loading } = useRequest(() => {
  //   return getArticleByid(artid);
  // });
  return (
    <>
      <EditorHeader mainContent={value} />
      <div className={styles.main}>
        <Editor
          value={value}
          plugins={plugins}
          onChange={(v) => {
            setValue(v);
          }}
        />
      </div>
    </>
  );
};
