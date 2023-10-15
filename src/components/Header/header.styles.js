import styled from "styled-components";

export const StyleHeader = styled.header`
    background: ${props => props.theme.greyer_background};
    width: 100%;
    height: 200px;
    padding: 12px 12px;
    
    display: flex;
    flex-direction: column; 
    align-items: center;
    justify-content: center;

    position: relative;

    .title{
        background: ${props => props.theme.greyer_background};

        padding-top: 5px;
        padding-bot: 1px;
        width: fit-content;
        font-size: xx-large;
        font-weight: bolder;
    }

    .logo {
        padding: 10px 0 10px 0;
        background: ${props => props.theme.greyer_background};
    }

    .newTaskForm {
        background: none;
        position: absolute;
        height: 54px;
        bottom: -27px;
        width: 100%;
        max-width: 736px;
        display: flex;
    }

    .newTaskForm input {
        height: 100%;
        flex: 1;
        color: ${props => props.theme.white_font};
        background: ${props => props.theme.input_background};
        border: 2px solid ${props => props.theme.input_border};
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 0 16px;
        font-size: 16px;
    }

    .newTaskForm input::placeholder {
        color: ${props => props.theme.input_placeholder};
    }

    .newTaskForm button {
        height: 100%;
        padding: 0 16px;
        background: ${props => props.theme.button_background};
        color: ${props => props.theme.white_font};
        border: none;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        display: flex;  
        align-items: center;
        gap: 6px;
        font-weight: 700;
        font-size: 14px;
    }
`
