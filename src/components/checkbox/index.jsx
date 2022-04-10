import { useState } from 'react';
import style from './checkbox.module.scss';
import check from 'assets/icons/check.svg';
export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <input
        type='checkbox'
        onClick={() => setChecked(!checked)}
        className={style.checkbox}
        style={checked ? checkedStyling : {}}
      />
    </>
  );
};
const checkedStyling = {
  backgroundImage: `url(${check})`,
  boxSizing: 'border-box',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};
