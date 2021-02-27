import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '../data/SidebarData'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function Sidebar(props) {

    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    Olusola-Dave
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <NewChannel>
                        <AddCircleOutlineIcon />
                    </NewChannel>
                </NewChannelContainer>
                <ChannelsList>
                    
                    <Channel >
                        <FiberManualRecordIcon /> GoLive TV
                    </Channel>

                    <Channel >
                    <FiberManualRecordIcon /> Great Developer
                </Channel>
                </ChannelsList>
            </ChannelsContainer>
            
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background-color: ${props => props.theme.sidebarBackground};
    transition: all .5s ease;
`

const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    justify-content: space-between;
    border-bottom: ${props => props.theme.barBorder};
    transition: ease-in-out .4s;
`

const Name = styled.div`
font-size: 1.5rem
`

const NewMessage = styled.div`
    width: 36px;
    height: 36px;
    background: white;
    color:  ${props => props.theme.sidebarColorNewMessage};
    fill: ${props => props.theme.sidebarColorNewMessage};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
    transition: all .5s ease;

        :hover{
            transform: scale(1.8);
            opacity: 0.7;
            transition: all .5s ease;
        }
`

const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: rgb(188,171,188);
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    transition: ease-in-out .4s;
    :hover {
        background:  ${props => props.theme.hover};
        background-position: 2%;
        transform: translateX(1rem);
    }
`

const ChannelsContainer = styled.div`
    color: rgb(188,171,188);
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    font-size: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 25px;
    padding-right: 15px;
    border-bottom: ${props => props.theme.barBorder};
    border-top: ${props => props.theme.barBorder};
    transition: ease-in-out .4s;

`
const NewChannel = styled.div`
    width: 24px;
    height: 24px;
    background: white;
    color:  ${props => props.theme.sidebarColorNewMessage};
    fill: ${props => props.theme.sidebarColorNewMessage};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    padding: 16px;
    transition: all .5s ease;

        :hover{
            transform: scale(1.8);
            opacity: 0.7;
            transition: all .5s ease;
        } 
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    transition: ease-in-out .4s;
    :hover {
        background:  ${props => props.theme.hover};
        background-position: 87%;
        transform: translateX(1rem);
    }
`
