import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function ScrollableContainer({ children }) {
  return (
    <OverlayScrollbarsComponent
        options={{
            scrollbars: {
                autoHide: 'scroll'  // 滚动时显示滚动条
            }
        }}
        style={{ height: '100%', overflowY: 'auto' }}  // 确保 OverlayScrollbars 组件充满空间
    >
        {children}
    </OverlayScrollbarsComponent>
  );
}

export default ScrollableContainer;