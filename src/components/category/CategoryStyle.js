import styled from 'styled-components'
export const MainMenu = styled.ul`
    display: flex;
    .tag { margin-bottom: 10px;
        border: 1px solid #438aff; border-radius: 15px; padding: 3px 10px; cursor: pointer; color: #438aff; font-size: 18px; text-align: center;
        &.on {
            background-color: #438aff; border-color: #438aff; color: #fff;
        }
    }
    
`