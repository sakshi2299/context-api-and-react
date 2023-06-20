import React from 'react';
import { ContextThemeColor } from './Component/ContextThemeColor.js';
import { ButtonHolder } from './Component/ButtonHolder.js';

export class ContextDemo extends React.Component {

    render() {
        return (
            <ContextThemeColor.Provider value="cyan">
               <ButtonHolder />
            </ContextThemeColor.Provider>
        )
    }
}
