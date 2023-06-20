import React from 'react';
import { ContextThemeColor } from './ContextThemeColor.js';

export class ContextButton extends React.Component {
    render() {
        let color = this.context;
        return <button style={{ backgroundColor: color }}>Context Button</button>
    }
}

ContextButton.contextType = ContextThemeColor;
