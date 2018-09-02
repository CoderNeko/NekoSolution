import * as React from 'react';
import {Button, Intent, Divider} from "@blueprintjs/core";
import {NSMenu} from "./NSMenu";
import {NSContent} from "./NSContent";

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div>
        <NSMenu />
        <Divider />
        <NSContent />
      </div>
    );
  }
}
