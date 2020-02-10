// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

import React from 'react'
import ReactDOM from 'react-dom'

interface ComponentProps {
    //
}

interface ComponentStates {
    //
}

class Component extends React.Component<ComponentProps, ComponentStates> {
    constructor(props: ComponentProps) {
        super(props);
        this.state = {
            // interface for ComponentStates
        };
    }

    public render(): React.ReactNode {
        return /* component */
    }
}

interface StatelessComponentProps {
    //
}

function StatelessComponent(props: StatelessComponentProps): JSX.Element {
    return /* component */
}

ReactDOM.render(/* component */,
    document.getElementsByName('contents'));