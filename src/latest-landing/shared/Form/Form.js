import React, { Component } from "react";
import "./Form.scss";
import CoreButton from "../core/Button";

export const Input = ({ ...props }) => (
    <input {...props} className={`${props.className || ''} Form__input`}/>);

export const Group = ({ children, ...props }) => (
    <div {...props} className={`${props.className || ''} Form__group`}>
        {children}
    </div>
);

export const IconGroup = ({ children, ...props }) => (
    <div {...props} className={`${props.className || ''} Form__input-icon-group`}>
        {children}
    </div>
);

export const Cta = ({ children, ...props }) => (
    <a {...props} className={`${props.className || ''} Form__cta`}>
        {children}
    </a>
);

export const Label = ({ children, ...props }) => (
    <label {...props} className={`${props.className || ''} Form__Label`}>
        {children}
    </label>
);

export const Title = ({ children, ...props }) => (
    <div {...props} className={`${props.className || ''} Form__title`}>
        {children}
    </div>
);

export const Form = ({ children, ...props }) => (
    <form {...props} className={`${props.className || ''} Form`}>
        {children}
    </form>
);

export const Button = ({ children, ...props }) => (
    <CoreButton {...props} className={`${props.className || ''} btn Form__btn btn-primary`}
                size="md"
                variant="">
        {children}
    </CoreButton>
);
