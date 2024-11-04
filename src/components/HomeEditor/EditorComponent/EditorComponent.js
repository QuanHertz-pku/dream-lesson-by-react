import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Checklist from '@editorjs/checklist';

import ReadFileServer from '../../../servers/FileServer/ReadFileServer';
import SaveFileServer from '../../../servers/FileServer/SaveFileServer';

function EditorComponent({ files, selectedFile }) {
    const editorInstance = useRef(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        // 初始化 Editor.js 实例，只有当 files 和 selectedFile 有效时才初始化
        if (files && files[selectedFile] && !editorInstance.current) {
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
                onChange: handleAutoSave,
            });
        }

        // 清理函数：在组件卸载时销毁 Editor.js 实例
        return () => {
            if (editorInstance.current) {
                editorInstance.current.destroy();
                editorInstance.current = null;
            }
        };
    }, [files, selectedFile]);

    useEffect(() => {
        // 每当文件或选中文件发生变化时，获取新的文件内容
        if (files && files[selectedFile]) {
            fetchFileData(files[selectedFile].id);
        }
    }, [files, selectedFile]);

    useEffect(() => {
        // 当内容变更时，将新的内容渲染到 Editor.js 中
        if (editorInstance.current && content) {
            editorInstance.current.isReady
                .then(() => {
                    editorInstance.current.render(content.filecontent);
                })
                .catch(error => console.error("Error rendering content:", error));
        }
    }, [content]);

    const fetchFileData = async (fileId) => {
        try {
            const response = await ReadFileServer(fileId);
            if (response && response.filecontent && Array.isArray(response.filecontent.blocks)) {
                setContent({ filecontent: response.filecontent });
            } else {
                console.error("Invalid file content format");
            }
        } catch (error) {
            console.error("Error fetching file content:", error);
        }
    };

    const handleAutoSave = async () => {
        // 确保 editorInstance.current 和 selectedFile 有效
        if (!editorInstance.current) {
            console.warn("Auto-save skipped: editor instance is missing.");
            return;
        }
        if (!files || !files[selectedFile]) {
            console.warn("Auto-save skipped: file information is missing.");
            return;
        }

        try {
            const outputData = await editorInstance.current.save();
            console.log('Auto-saving data: ', outputData);
            const fileId = files[selectedFile].id;
            if (fileId) {
                SaveFileServer(fileId, outputData);
            } else {
                console.warn("Auto-save skipped: file ID is missing.");
            }
        } catch (error) {
            console.error('Auto-saving failed:', error);
        }
    };

    return files && files[selectedFile] ? (
        <div id="editorjs"></div>
    ) : (
        <div>Loading...</div> // 如果 files 数据未加载时，显示加载状态
    );
}

export default EditorComponent;
