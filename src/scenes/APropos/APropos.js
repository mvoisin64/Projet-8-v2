import React from 'react';
import backgroundapropos from '../../img/backgroundapropos.png';
import Banner from '../../components/Banner/Banner.js';
import Collapse from '../../components/Collapse/Collapse.js'
function APropos() {
  return (
    <div className='scene'>
<Banner text="" image={backgroundapropos} />
<Collapse/>
<Collapse/>
<Collapse/>
<Collapse/>
    </div>
  );
}
export default APropos;