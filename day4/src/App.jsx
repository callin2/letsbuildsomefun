import React, {useState} from 'react';
import {Window} from "../../common/component/window";
import {Button} from "../../common/component/button";
import {Toolbar} from "../../common/component/toolbar";
import {Pane} from "../../common/component/pane";
import {MyCanvas} from "./MyCanvas";
import {MyCanvas2} from "./MyCanvas2";

export function App(props) {
    let [drawCtx, setDrawCtx] = useState({shape:'rect', color:'orange'})

    let handleFeatureClick = (featType, evt) => {
        switch(featType) {
            case 'move':
                setDrawCtx({shape:'move'})
                break;
            case 'shape':
                setDrawCtx({shape:'rect', color:'orange'})
                break;
        }
    }

    return (
        <Window>
            <Window.Header >
                <Toolbar>
                    <Button.Group>
                        <Button onClick={()=>setDrawCtx({tool:'move'})}>move</Button>
                        <Button onClick={()=>setDrawCtx({tool:'shape', shape:'rect', color:'orange'})}>shape</Button>
                        <Button onClick={()=>setDrawCtx({tool:'color', color:'orange'})}>color</Button>
                    </Button.Group>

                    <Button.Group>
                        <Button onClick={()=>setDrawCtx({tool:'shape', shape:'rect', color:'orange'})}>사각형</Button>
                        <Button onClick={()=>setDrawCtx({tool:'shape', shape:'circle', color:'orange'})}>원</Button>
                        <Button onClick={()=>setDrawCtx({tool:'shape', shape:'line', color:'orange'})}>선</Button>
                        <Button onClick={()=>setDrawCtx({tool:'shape', shape:'path', color:'orange'})}>path</Button>
                    </Button.Group>
                </Toolbar>
            </Window.Header>
            <Window.Contents>
                <Pane style={{borderRight:'1px solid gray'}}><MyCanvas shapes={[
                    {shape:'line', x1:100,y1:100, x2:200,y2:300},
                    {shape:'line', x1:120,y1:100, x2:200,y2:300},
                    {shape:'line', x1:130,y1:10, x2:200,y2:300},
                ]}  activeDrawCtx={{shape:'line', color:'orange'}} /></Pane>
                {/*<Pane><MyCanvas2 activeDrawCtx={drawCtx}/></Pane>*/}
            </Window.Contents>
            <Window.Footer>
                Footer
            </Window.Footer>
        </Window>
    );
}

export default App;
