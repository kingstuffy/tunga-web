import React from 'react';
import './Loader.scss';
import loaderImg from '../../assets/img/common/rolling.gif';

const Loader = ({ message }) => {
    return (
        <div className='Loader'>
            <div className='Loader__content'>
                <img src={loaderImg} className='Loader__img'/>
                <div className='Loader__msg'>
                    {message || ''}
                </div>
            </div>
        </div>
    );
};

export default Loader;
