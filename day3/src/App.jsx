import React, {useState} from 'react';
import {Button} from "./component/button";
import {Pane} from "./component/pane";
import {Window} from "./component/window";
import {Toolbar} from "./component/toolbar";
import {Theme} from "./style/theme";
import {BrushIcon} from "./component/icon";
import {Nav} from "./component/nav";
import {Draw} from "./component/draw";

export function App(props) {
    return (
        <Theme>
            <Window>
                <Window.Header >
                    <Toolbar>
                        <Button.Group>
                            <Button icon={'home'}><BrushIcon/></Button>
                            <Button icon={'home'}>move</Button>
                            <Button icon={'home'}>shape</Button>
                            <Button icon={'home'}>color</Button>
                        </Button.Group>

                        <Button.Group>
                            <Button icon={'home'}>icon</Button>
                            <Button icon={'home'}>icon</Button>
                        </Button.Group>

                        <Button.Group>
                            <Button icon={'home'}>icon</Button>
                            <Button icon={'home'}>icon</Button>
                        </Button.Group>
                    </Toolbar>
                </Window.Header>
                <Window.Contents>
                    <Pane.Group>
                        <Pane.SideBar>
                            <Nav>
                                <Nav.Group title={'Shape'}>
                                    <Nav.Item>
                                        <span></span> circle
                                    </Nav.Item>
                                    <Nav.Item>
                                        rectangle
                                    </Nav.Item>
                                    <Nav.Item>
                                        line
                                    </Nav.Item>
                                </Nav.Group>

                                <Nav.Group title={'color'}>
                                    <Nav.Item>
                                        <span></span> red
                                    </Nav.Item>
                                    <Nav.Item>
                                        green
                                    </Nav.Item>
                                    <Nav.Item>
                                        blue
                                    </Nav.Item>
                                </Nav.Group>

                            </Nav>
                        </Pane.SideBar>
                        <Pane>
                            <Draw/>
                        </Pane>
                    </Pane.Group>

                </Window.Contents>
                <Window.Footer className="toolbar toolbar-footer">
                    Footer
                </Window.Footer>
            </Window>
        </Theme>
    );
}

export default App;
