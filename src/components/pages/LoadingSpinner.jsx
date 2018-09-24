import React from 'react';
import './LoadingSpinner.css'
import LoadingScreen from 'react-loading-screen';






const LoadingSpinner = () => (
    <div>
        {/* <div className="loader"></div> */}
        {/* <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
       <LoadingScreen
            loading={true}
            bgColor='transparent'
            spinnerColor='#000000'
            textColor=''
            text=''
        > 
            // ...
            // here loadable content
            // for example, async data
            //<div>Loadable content</div>
        </LoadingScreen>
    </div>
);

export default LoadingSpinner;