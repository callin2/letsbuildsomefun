import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'
import {Window} from "../component/window";

const HLR = (props) => {
    return(
        <>
            <Window.Header>
                {props.header}
            </Window.Header>
            <Window.Contents>
                {props.contents}
            </Window.Contents>
            <Window.Footer>
                {props.footer}
            </Window.Footer>
        </>
    )
}

