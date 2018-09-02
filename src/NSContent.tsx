import * as React from "react";
import { NSFunctionTab } from './NSFunctionTab';

export class NSContent extends React.PureComponent<{}, undefined> {
    render() {
        return(
            <div id="ns-content">
                <NSFunctionTab />
            </div>
        );
    }
}