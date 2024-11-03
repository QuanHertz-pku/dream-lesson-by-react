import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

function EditorComponent(props){
    const editorInstance = useRef(null); // 使用 useRef 创建 editorInstance
    useEffect(() => {
        // 初始化 Editor.js 实例
        editorInstance.current = new EditorJS({
                holder: 'editorjs',
            });
        console.log("change file ok")
    }, [props.selectedFile]);

    return (
        <div>
            <div id="editorjs"></div>
        </div>
    );
};

export default EditorComponent;
