import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export default function Loading() {
  return (
    <div>
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  );
}
