import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';

import ReadFileServer from '../../../servers/FileServer/ReadFileServer';

function EditorComponent(props) {
    const editorInstance = useRef(null); // 使用 useRef 创建 editorInstance
    const [content, setContent] = useState({ filecontent: null });

    useEffect(() => {
        // 初始化 Editor.js 实例
        if (!editorInstance.current) {
            editorInstance.current = new EditorJS({
                holder: 'editorjs',
                tools: {
                    header: {
                        class: Header,
                        inlineToolbar: ['link']
                    },
                    list: {
                        class: List,
                        inlineToolbar: true
                    },
                    checklist: {
                        class: Checklist,
                        inlineToolbar: true
                    }
                },
                onChange: async () => {
                    try {
                        const outputData = await editorInstance.current.save();
                        console.log('Auto-saving data: ', outputData);
                    } catch (error) {
                        console.error('Auto-saving failed: ', error);
                    }
                },
            });
        }

        // 清理函数：在组件卸载时销毁 Editor.js 实例
        return () => {
            if (editorInstance.current && editorInstance.current.destroy) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, []); // 这个 useEffect 只运行一次，用于初始化和清理 Editor.js 实例

    useEffect(() => {
        // 当 props.files 或 props.selectedFile 变化时，获取新的文件内容
        const fetchFileData = async () => {
            if (Array.isArray(props.files) && props.files.length > 0 && props.files[props.selectedFile]) {
                const fileId = props.files[props.selectedFile].id;
                console.log("Selected file ID:", fileId);
                try {
                    const response = await ReadFileServer(fileId);

                    // 确保响应数据符合 EditorJS 数据格式
                    if (response && response.filecontent && Array.isArray(response.filecontent.blocks)) {
                        setContent({ filecontent: response.filecontent });
                    } else {
                        console.error("Invalid file content format");
                    }
                } catch (error) {
                    console.error("Error fetching file content:", error);
                }
            }
        };

        fetchFileData();
    }, [props.files, props.selectedFile]); // 当 files 或 selectedFile 改变时重新获取内容

    useEffect(() => {
        // 当 content 改变时，将新的内容渲染到 Editor.js 中
        console.log("Updated content:", content);
        if (editorInstance.current && content.filecontent) {
            // 检查 blocks 是否存在
            if (editorInstance.current.blocks && typeof editorInstance.current.blocks.render === 'function') {
                editorInstance.current.blocks.render(content.filecontent);
            } else {
                console.error("EditorJS blocks.render is not available.");
            }
        }
    }, [content]); // 当 content 改变时执行

    return (
        <div>
            <div id="editorjs"></div>
        </div>
    );
}

export default EditorComponent;