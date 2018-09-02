import * as React from "react";
import {Menu, MenuItem, Classes, MenuDivider, Popover, Position, Button} from "@blueprintjs/core";

interface NSMenuState {
    menu: Array<MenuItem>;
}

export class NSMenu extends React.PureComponent<{}, NSMenuState> {
    public state: NSMenuState = {
        menu: [],
    };

    render() {
        const menuFile = (
            <Menu className = {Classes.ELEVATION_1}>
                <MenuItem text="新建文件(N)" label="Ctrl+N" icon="document"/>
                <MenuDivider />
                <MenuItem text="打开文件(O)" label="Ctrl+O" icon="document-open"/>
                <MenuItem text="打开文件夹(F)" label="Ctrl+Alt+F" icon="folder-open"/>
                <MenuDivider />
                <MenuItem text="保存文件(S)" label="Ctrl+S" icon="saved" />
                <MenuItem text="文件另存为(A)" label="Ctrl+Shift+S" icon="box"/>
            </Menu>
        );

        const menuEdit = (
            <Menu className = {Classes.ELEVATION_1}>
                <MenuItem text="撤销(U)" label="Ctrl+Z" icon="undo" />
                <MenuItem text="恢复(R)" label="Ctrl+Y" icon="redo"/>
                <MenuDivider />
                <MenuItem text="剪切(T)" label="Ctrl+X" icon="cut"/>
                <MenuItem text="复制(C)" label="Ctrl+C" icon="clipboard"/>
                <MenuItem text="粘贴(P)" label="Ctrl+V" icon="duplicate"/>
            </Menu>
        );
        return (
            <p id="ns-menu">
                <Popover content={menuFile} position={Position.BOTTOM}>
                    <Button text="文件(F)" minimal={true}/>
                </Popover>
                <Popover content={menuEdit} position={Position.BOTTOM}>
                    <Button text="编辑(E)" minimal={true}/>
                </Popover>
            </p>
        );
    }
}