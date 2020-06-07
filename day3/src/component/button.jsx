import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'

const ButtonGroup = styled.div`
  ${tw`flex`}
`

export const Button = styled.button`
  ${tw`h-6 px-4 border border-gray-400 rounded focus:outline-none hover:bg-gray-300 bg-gray-100`}
  ${ButtonGroup} & {
    ${tw`rounded-none border-l-0`}
  }
  
  ${ButtonGroup} &:first-child {
    ${tw`rounded-l`}
  }
  
  ${ButtonGroup} &:last-child {
    ${tw`rounded-r`}
  }
`

Button.Group = ButtonGroup
