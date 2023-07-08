import styled from "styled-components"
export const DEditorWrapper = styled.div`
    width: 100%;
    height: 133px;
    background: #fff;
    position: relative;
    box-sizing: border-box;
    .public-DraftEditorPlaceholder-root {
        position: absolute;
        color: #888;
        z-index: 0;
    }
    .DraftEditor-editorContainer {
        position: relative;
        z-index: 2;
    }
    .public-DraftEditor-content {
        min-height: 74px;
    }
    .sendButton{
        position: absolute;
        height: 30px;
        right: 15px;
        bottom: 20%;
        transform: translateY(-50%);
        padding: 0 23px;
        border: 1px solid #979797;
        box-sizing: border-box;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
        color: #262626;
        appearance: none;
        cursor: pointer;
        transition: all .2s;
        user-select: none;
        background: transparent;
    }
`