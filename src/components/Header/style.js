import styled from "styled-components"
export const HeaderWrapper = styled.div`
    height: 60px;
    display:flex;
    padding:10px;
    color:#343036;
    .Logo{
        height:80%;
        margin: auto 0;
    }
    .Logo_pic{
        height:100%;
        margin: auto;
    }
    .Logo_name{
        width:100%;
        height:100%;
    }
    .login_info{
        display:flex;
        justify-content: space-between;
    }
    .Info{
        display:flex;
        flex-direction:column;
        justify-content: space-evenly;
        margin-left:10px;
    }
    .Info_Name{
        font-size:14px;
    }
    .Info_State{
        width:20px;
        height:20px;
    }
`