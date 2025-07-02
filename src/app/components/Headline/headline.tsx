import React from 'react';
import styles from './headline.module.scss';

export default function Headline({ children, level = 1, className = '' }: { children: React.ReactNode, level?: number, className?: string }) {
    const classes = [styles[`level__${level}`], className].join(' ');
    return (
        <>
            {React.createElement(`h${level}`, { className: classes }, children)}
        </>
    )
}