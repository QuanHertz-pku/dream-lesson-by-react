import React, { useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';

function EditorComponent(props){
    const editorInstance = useRef(null); // 使用 useRef 创建 editorInstance
    useEffect(() => {
        console.log('props',props)
        if (!editorInstance.current) {
            editorInstance.current = new EditorJS({
                holder: 'editorjs',
            });
        }
        // 清理函数：在组件卸载时销毁 Editor.js 实例
        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, [props.selectedFile]);

    return (
        <div>
            <div id="editorjs"></div>
        </div>
    );
};

export default EditorComponent;