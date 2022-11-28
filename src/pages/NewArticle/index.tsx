import gfm from '@bytemd/plugin-gfm';
import { useState } from 'react';
import { Editor, Viewer } from '@bytemd/react';
import 'bytemd/dist/index.css';
import styles from './index.module.less';
console.log('[styles]: ', styles);
const plugins = [
  gfm(),
  // Add more plugins here
];

export default () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.main}>
      <Editor
        className={styles.bytemd}
        value={value}
        plugins={plugins}
        onChange={(v) => {
          setValue(v);
        }}
      />
    </div>
  );
};
