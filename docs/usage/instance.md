---
title: 实例方法
order: 3
nav:
  title: 示例
---

### 方法列表

- scrollToViewByPrimaryKey: `(primaryKey: string, callback: (el: HTMLElement | null) => void)`

```jsx
/**
 * title: 滚动到指定行
 * description: 使用 `scrollToViewByPrimaryKey` 实现。需要提供 `primaryKey`。未设置 `primaryKey` 的情况，`dataSource` 将读取 `id`。
 */
import React from 'react';
import PETable from 'pe-table';
import { createGlobalStyle } from 'styled-components';

const Css = createGlobalStyle`
  @keyframes find {
    0% {
      background-color: rgba(0, 121, 242, 0.1);
    }
    100% {
      background-color: #fff;
    }
  }

  .find {
    animation: 4s find;
  }
`;

export default () => {
  const ref = React.useRef();

  return (
    <>
      <Css />
      <button
        onClick={() => {
          ref.current.scrollToViewByPrimaryKey('14', (el) => {
            Array.from(el.children).map((el) => {
              el.classList.remove('find');
              setTimeout(() => {
                el.classList.add('find');
              }, 100);
            });
          });
        }}
      >
        查找 赵六8
      </button>
      <br />
      <br />
      <PETable
        columns={[
          {
            dataIndex: 'name',
            title: '姓名',
            alignHeader: 'center',
            width: 100,
          },
          {
            dataIndex: 'sex',
            title: '性别',
            width: 100,
            align: 'center',
          },
          {
            dataIndex: 'age',
            title: '年龄',
            width: 100,
          },
        ]}
        ref={ref}
        autoWidth
        maxHeight={200}
        dataSource={[
          { id: 1, name: '张三1', sex: '男', age: '18' },
          { id: 2, name: '李四2', sex: '女', age: '28' },
          { id: 3, name: '王五3', sex: '女', age: '48' },
          { id: 4, name: '赵六4', sex: '男', age: '8' },
          { id: 11, name: '张三5', sex: '男', age: '18' },
          { id: 12, name: '李四6', sex: '女', age: '28' },
          { id: 13, name: '王五7', sex: '女', age: '48' },
          { id: 14, name: '赵六8', sex: '男', age: '8' },
          { id: 111, name: '张三9', sex: '男', age: '18' },
          { id: 122, name: '李四10', sex: '女', age: '28' },
          { id: 133, name: '王五11', sex: '女', age: '48' },
          { id: 144, name: '赵六12', sex: '男', age: '8' },
        ]}
      />
    </>
  );
};
```
