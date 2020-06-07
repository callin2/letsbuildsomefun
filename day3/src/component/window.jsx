import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'

export const Window = styled.div`
  ${tw`absolute inset-0 flex flex-col h-full bg-white rounded-lg overflow-hidden m-1`}
`



const Header = styled.div`
  background-image: linear-gradient(to bottom,#e2e8f0 0,#cbd5e0 100%);
  ${tw`h-8 shadow-md flex justify-between px-1 items-center overflow-hidden border border-gray-500`}
`



const Contents = styled.div`
  ${tw`flex flex-grow border items-stretch`}
`

const Footer = styled.div((props)=>[
    tw`h-6 shadow-md flex justify-between px-1 items-center overflow-hidden`,
    css`
      background-image: linear-gradient(to bottom,#e2e8f0 0,#cbd5e0 100%);
    `
])


Window.Header = Header
Window.Contents = Contents
Window.Footer = Footer
