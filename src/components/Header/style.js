import styled from "styled-components"
export const HeaderWrapper = styled.div`
    .Head{
        height: 60px;
        padding: 5px;
        color: white;
        background: #3369FF;
        display: flex;
        justify-content: space-between;
    }
    .Head__left{
        display:flex;
    }
    .Head__left--img{
        height:60px;
        width:60px;
        border-radius:50%;
        img{
            height:100%;
        }
    }
    .Head__left--info{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        .description{
            font-size:12px;
        }
    }
    .text{
        display:flex;
        align-items:center;
        img{
            width:20px;
            height:20px;
        }
        span{
            font-size:14px;
        }
    }
    .Head__right{
        display:flex;
        align-items:center;
        padding-right:10px;
        .line{
            width:14px;
            height:3px;
            line-height:60px;
            background:white;
            cursor: pointer;
        }
    }
`