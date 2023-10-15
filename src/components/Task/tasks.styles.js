import styled from "styled-components"
export const StyleTasks = styled.main`
    width: 100%;
    max-width: 736px;
    margin: 0 auto;
    margin-top: 90px;
    padding: 0 1rem;
  
  .subheader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  
  .subheader > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .subheader p {
    color:  ${props => props.theme.white_font};
    font-size: 14px;
    font-weight: 700;
  }
  
  
  .subheader span {
    background: ${props => props.theme.greyer_background};
    color: #D9D9D9;
    padding: 3px 9px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 700;
  }
  
  .list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`