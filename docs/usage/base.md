---
title: 常规
order: 0
nav:
  title: 示例
---

```jsx
/**
 * title: 基础用法
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
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
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
      ]}
    />
  );
};
```

```jsx
/**
 * title: 自动宽度
 * description: 使用 `autoWidth:true`，所以单元格自动分配屏幕宽度，实际内容宽度小于屏幕宽度时，会沾满屏幕宽度。此模式下不会出现水平滚动条。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
    <PETable
      autoWidth
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
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
      ]}
    />
  );
};
```

```jsx
/**
 * title: 圆角
 * description: 使用 `round:true` 实现圆角效果。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
    <PETable
      round
      autoWidth
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
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
      ]}
    />
  );
};
```

```jsx
/**
 * title: 加载中
 * description: 使用 `loading:true` 实现加载效果。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
    <PETable
      loading
      autoWidth
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
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
      ]}
    />
  );
};
```

```jsx
/**
 * title: 空数据
 * description: 使用 `emptyContent` 进行自定义内容。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
    <>
      <PETable
        autoWidth
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
        dataSource={[]}
      />
      <br />
      <PETable
        autoWidth
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
        dataSource={[]}
        emptyContent={
          <>
            <svg
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
            >
              <path
                d="M831.7 369.4H193.6L64 602v290.3h897.2V602L831.7 369.4zM626.6 604.6c0 62.9-51 113.9-114 113.9s-114-51-114-113.9H117.5l103.8-198h582.5l103.8 198h-281zM502.2 131h39.1v140.6h-39.1zM236.855 200.802l27.647-27.647 99.419 99.418-27.648 27.648zM667.547 272.637l99.418-99.419 27.648 27.648-99.418 99.418z"
                p-id="8251"
                fill="#cdcdcd"
              ></path>
            </svg>
            <br />
            无数据
          </>
        }
      />
    </>
  );
};
```
