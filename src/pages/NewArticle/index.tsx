import gfm from '@bytemd/plugin-gfm';
import { useState } from 'react';
import { Editor, Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import styles from './index.module.less';
import EditorHeader from '@/pages/NewArticle/components/EditorHeader';
const plugins = [
  gfm(),
  // Add more plugins here
];

export default () => {
  const [value, setValue] = useState('');

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
