import React from 'react'
type BTPProps = {
    info:string
    messageCount:number
    isLoggegIn:boolean
}
const BasicTypingProps = (props:BTPProps) => {
  return (
    <div>
        {props.isLoggegIn  ? `Welcome ${props.info}! You have ${props.messageCount} messages`:"Welcome Guest"}
    </div>
  )
}

export default BasicTypingProps