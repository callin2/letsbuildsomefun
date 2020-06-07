import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'

export const Pane = styled.div((props)=>[
    tw`border border-gray-300 flex flex-col flex-grow`
])



const PaneGroup = styled.div((props)=>[
    tw`flex flex-grow`
])

const SideBar = styled.div((props)=>[
    tw`w-48 bg-gray-100 flex flex-col border border-gray-300`
])


Pane.Group = PaneGroup
Pane.SideBar = SideBar
