import styled from "styled-components"
export const HeaderWrapper = styled.div`
    height: 60px;
    display:flex;
    color:red;
    padding:10px;
    .Logo{
        width:40px;
        height:40px;
    }
    .Logo_name{
        width:100%;
        height:100%;
    }
    .Info{
        display:flex;
        flex-direction:column;
        margin-left:10px;
    }
    .Info_Name{
        font-size:14px;
        color:#343036;
    }
    .Info_State{
        width:10px;
        height:10px;
    }
`