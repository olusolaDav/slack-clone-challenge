import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Chat(props) {


    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        <FiberManualRecordIcon />  GoLive Tv
                    </ChannelName>
                    <ChannelInfo>
                        An networking channel for developer 
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <Info />
                </ChannelDetails>
            </Header>
            <MessageContainer>
               Messages
            </MessageContainer>
            <ChatInput />
        </Container>

    )
}

export default Chat;

const Container = styled.div`
    background-color:  ${props => props.theme.Background};
    display: grid;
    color:  ${props => props.theme.chatColor};
    grid-template-rows: 64px auto min-content;
    min-height: 0;
    transition: all .5s ease;
`

const Channel = styled.div`
       
`

const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;
`

const ChannelName = styled.div`
    font-weight: 500;
    display: flex;
    align-items: center; 
`

const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
`

const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`

const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: ${props => props.theme.chatBorder};
    justify-content: space-between;
`

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    margin-left: 16px
`
