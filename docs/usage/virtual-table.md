---
title: 虚拟化表格
order: 0
nav:
  title: 示例
group:
  title: 虚拟化
  order: 0
---

通过 `useVirtual:true` 开启虚拟滚动。支持动态行高。

```jsx
/**
 * title: 固定行高
 * description: 开启 `useVirtual` 后即可生效。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const dataSource = [...new Array(1000)].map((item, rindex) => {
    const rowData = { id: rindex };

    columns.map((item, colindex) => {
      rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
    });

    return rowData;
  });

  return (
    <div>
      此示例为 1000列 * 15行 = 1.5万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={dataSource}
        columns={columns}
        maxHeight={500}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 动态行高
 * description: 开启 `useVirtual` 后即可生效。默认支持动态行高。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const dataSource = [...new Array(1000)].map((item, rindex) => {
    const rowData = { id: rindex };
    const h = Math.random() * 80 + 40;

    columns.map((item, colindex) => {
      rowData[item.dataIndex] = (
        <div
          style={{
            height: h,
          }}
        >{`${rindex + 1}行${colindex + 1}列`}</div>
      );
    });

    return rowData;
  });

  return (
    <div>
      此示例为 1000列 * 15行 = 1.5万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={dataSource}
        columns={columns}
        maxHeight={500}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 滚动到指定行
 * description: 通过实例方法 `scrollToViewByPrimaryKey` 进行定位。参考[实例方法](/progressive-enhance-table-docs/usage/instance)。
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
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const dataSource = [...new Array(1000)].map((item, rindex) => {
    const rowData = { id: rindex };

    columns.map((item, colindex) => {
      rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
    });

    return rowData;
  });

  return (
    <div>
      <Css />
      <button
        onClick={() => {
          ref.current.scrollToViewByPrimaryKey(99, (el) => {
            console.log({ el });
            el &&
              Array.from(el.children).map((el) => {
                el.classList.remove('find');
                setTimeout(() => {
                  el.classList.add('find');
                }, 100);
              });
          });
        }}
      >
        定位id=99
      </button>
      <button
        onClick={() => {
          ref.current.scrollToViewByPrimaryKey(999, (el) => {
            console.log({ el });
            el &&
              Array.from(el.children).map((el) => {
                el.classList.remove('find');
                setTimeout(() => {
                  el.classList.add('find');
                }, 100);
              });
          });
        }}
      >
        定位id=999
      </button>
      <br />
      <br />
      <PETable
        ref={ref}
        round
        dataSource={dataSource}
        columns={columns}
        maxHeight={500}
        useVirtual
      />
    </div>
  );
};
```

todos：

> 动态高度下的，修改 ds 操作，如删除，异步展开，定位等。

- 合并单元格
- 动态高度下 删除某一行 且位置不变
