import styled from "styled-components"
export const HeaderWrapper = styled.div`
    height: 60px;
    display:flex;
    padding:10px;
    background: #F1F5FFFF;
    border-radius: 10px 10px 0 0;
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
        color:#1a1b1d;
    }
    .login_info{
        color:#999;
        display:flex;
        align-items: center;
        font-size: 14px;
    }
    .Info{
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        margin-left:10px;
    }
    .Info_Name{
        font-size:18px;
        font-weight: 500;
    }
    .Info_State{
        width:20px;
        height:20px;
    }
`