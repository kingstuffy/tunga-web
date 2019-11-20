import React, { Component } from "react";

const LeftArrow = ({ width = 16, height = 16, stroke = '#DA3451' }) => (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M15 8H1" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 15L1 8L8 1" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

LeftArrow.propTypes = {};
export default LeftArrow;

