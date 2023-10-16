import styled from "styled-components"
export const StyleTask = styled.main`
  background: ${props => props.theme.greyer_background};
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  font-weight: 600;


  .task p {

    font-size: 14px;
    line-height: 19px;
    color: ${props => props.theme.white_font};
    margin-right: auto;
  }

  p.textCompleted {
    color: ${props => props.theme.button_background};
    text-decoration: line-through;
  }

  .checkContainer {
    width: 18px;
    height: 18px;
    background: none;
    border: none;
  }

  .checkContainer div {
    width: 100%;
    height: 100%;
    border-radius: 999px;
    border: 2px solid ${props => props.theme.white_font};
  }

  .checkContainer svg {
    width: 100%;
    height: 100%;
    color: #5E60CE;
  }

  .deleteButton {
    background: none;
    border: none;
    color: #808080;
  }
`