'use client';

import React, { useState } from 'react';
import styles from './slugifyStringTool.module.css';

export default function SlugifyStringTool() {
    const [inputString, setInputString] = useState('');
    const [slug, setSlug] = useState('');

    const generateSlug = (text) => {
        return text
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, '')      // Remove special chars
            .replace(/\s+/g, '-')              // Replace spaces with -
            .replace(/-+/g, '-')               // Collapse multiple hyphens
            .replace(/^-+|-+$/g, '');          // Trim - from ends
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputString(val);
        setSlug(generateSlug(val));
    };

    return (
        <div className={styles.container}>
            <h1>Slugify String Tool</h1>
            <input
                className='input'
                value={inputString}
                placeholder="Enter your title or sentence..."
                onChange={handleInputChange}
            />
            <div className={styles.result}>
                <strong>Slug:</strong> <span>{slug || '–'}</span>
            </div>
        </div>
    )
}