import styled from "styled-components";
export const SessionWrapper = styled.div`
    font-size: 14px;
    overflow: hidden;
    .rightSession{
        float:right;
        display:flex;
        align-items: center;
        flex-direction: row-reverse;
        margin-bottom:5px;
        .avatar{
            width:35px;
            height:35px;
            img{
                width:100%;
            }
        }
        .rightContent{
            margin-right:7px;
            background-color: rgb(255,255,255);
            border-radius: 6px 0px 6px 6px;
            padding: 10px;
            box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.03);
            font-size: 14px;
        }
    }
    .leftSession{
        display:flex;
        align-items: center;
        .avatar{
            width:35px;
            height:35px;
            margin-right:7px;
            img{
                width:100%;
            }
        }
        .leftContent{
            background-color: rgb(255,255,255);
            border-radius: 0px 6px 6px 6px;
            padding: 10px;
            box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.03);
            font-size: 14px;
        }
    }
    .clearfix {
        clear: both;
    }
    .clearfix::before,
    .clearfix::after {
        clear: both;
        content: "";
        display: block;
        height: 0;
        line-height: 0;
        visibility: hidden;
    }
`;