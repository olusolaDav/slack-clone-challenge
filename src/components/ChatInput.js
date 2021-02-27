import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault()
    }


    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
   
`

const InputContainer = styled.div`
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.2);
   
    

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        border-radius: 10px;
        background-color:  ${props => props.theme.inputBackground};
        input {
            flex: 1;
            border: none;
            font-size: 13px;
            color:  ${props => props.theme.inputColor};
            background-color:  ${props => props.theme.inputBackground};
            transition: all .5s ease;
           
        }

        input:focus {
            outline: none;
        }
        transition: all .5s ease;
    }

`

const SendButton = styled.button`
    background-color:  ${props => props.theme.sendButtonB};
    color: ${props => props.theme.sendButtonC}
    transition: all .5s ease;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background:#646464;
    }

`

const Send = styled(SendIcon)`
    
`
