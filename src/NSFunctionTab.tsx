import * as React from "react";
import { Tab, Tabs, Classes, Icon, Tooltip, Position } from "@blueprintjs/core";

interface NSFunctionTabState {
}

export class NSFunctionTab extends React.PureComponent<{}, NSFunctionTab> {

    render() {
        // const ToolKitPanel = (
        //     <div>
        //     </div>
        // );
        return (
            <div id="ns-funtion-tab">
                <Tabs animate={true} vertical={true} id="ns-function-tab">
                    <Tab id="toolkit" panel={<ToolKitPanel />}>
                        {/* <Tooltip content={<span>工具箱</span>} position={Position.RIGHT} usePortal={false} className={Classes.TOOLTIP_INDICATOR}> */}
                            <Icon icon="box" iconSize={24}/>
                        {/* </Tooltip> */}
                    </Tab>
                    <Tab id="search" panel={<SearchPanel />}>
                        <Icon icon="search" iconSize={24}/>
                    </Tab>
                    <Tab id="set" panel={<SettingPanel />}>
                        <Icon icon="cog" iconSize={24}/>
                    </Tab>
                    <Tabs.Expander />
                </Tabs>
            </div>
        );
    }
}

const ToolKitPanel: React.SFC<{}> = () => (
    <div>
        <h3>This is ToolKit</h3>
    </div>
);

const SearchPanel: React.SFC<{}> = () => (
    <div>
        <h3>This is Searching</h3>
    </div>
);

const SettingPanel: React.SFC<{}> = () => (
    <div>
        <h3>This is Setting</h3>
    </div>
);