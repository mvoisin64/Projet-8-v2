import React from 'react';
import backgroundapropos from '../../img/backgroundapropos.png';
import Banner from '../../components/Banner/Banner.js';
import Collapse from '../../components/Collapse/Collapse.js'
import './APropos.scss';

function APropos() {
  return (
    <div className='scene'>
<Banner text="" image={backgroundapropos} />
<div className='collapse-container'>
<Collapse/>
<Collapse/>
<Collapse/>
<Collapse/>
</div>
    </div>
  );
}
export default APropos;