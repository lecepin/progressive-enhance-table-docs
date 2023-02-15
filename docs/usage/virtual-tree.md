---
title: 虚拟化树表格
order: 1
nav:
  title: 示例
group:
  title: 虚拟化
  order: 0
---

通过 `useVirtual:true` 和 `isTree:true` 开启树型虚拟滚动。支持动态行高及编辑操作。

:::warning
做删除操作时，请不要直接对 `dataSource` 进行修改，会导致表格的滚动条重置到顶端，或者 高度偏移 等问题。
请调用相应的实例方法进行处理。
:::

:::info
此页面加载了大量虚拟表格实例，可能会有卡顿现象。体验可以点击每个实例下方的 “在独立页面中打开” 按钮。
:::

```jsx
/**
 * title: 虚拟树
 * description: 开启 `useVirtual` 后即可生效。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      此示例在全部展开的情况下，共 15列 * (15 + 15 * 15 + 15 * 15 * 15 + 15 * 15
      * 15 * 15)行 = 81.36万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 默认展开
 * description: 与 `defaultOpenRowKeys` 配合。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      此示例在全部展开的情况下，共 15列 * (15 + 15 * 15 + 15 * 15 * 15 + 15 * 15
      * 15 * 15)行 = 81.36万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        defaultOpenRowKeys={['0-0', '0-0-0', '0-2']}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 分组视图
 * description: 与 `isTreeGroupView` 配合。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      此示例在全部展开的情况下，共 15列 * (15 + 15 * 15 + 15 * 15 * 15 + 15 * 15
      * 15 * 15)行 = 81.36万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        defaultOpenRowKeys={['0-0', '0-0-0']}
        useVirtual
        isTreeGroupView
        cellProps={(rowIndex, colIndex, dataIndex, record) => {
          if (record.id.split('-').length === 2 && dataIndex == '1') {
            return { colSpan: columns.length };
          }
        }}
      />
    </div>
  );
};
```

```jsx
/**
 * title: 修改行数据
 * description: 调用实例方法 `modifyRow` 进行处理，请不要修改行数据中的 `children` 等属性。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const ref = React.useRef();
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      <button
        onClick={() => {
          ref.current.modifyRow('0-0', (data) => {
            if (data) {
              data['1'] = <div style={{ color: 'red' }}>已修改此单元格</div>;
            }

            // 必须返回 data
            return data;
          });
        }}
      >
        修改 0-0 行第一列数据
      </button>
      <br />
      <br />
      <PETable
        ref={ref}
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        defaultOpenRowKeys={['0-0']}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 删除行数据
 * description: 调用实例方法 `delRow` 进行处理。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const ref = React.useRef();
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      <button
        onClick={() => {
          ref.current.delRow('0-0');
        }}
      >
        删除 0-0 行
      </button>
      <br />
      <br />
      <PETable
        ref={ref}
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        defaultOpenRowKeys={['0-0', '0-0-0']}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 滚动到指定行
 * description: 调用实例方法 `scrollToViewByPrimaryKey` 进行处理。且此行必须已经展开了。
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
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      <Css />
      <button
        onClick={() => {
          ref.current.scrollToViewByPrimaryKey('0-0-14', (el) => {
            Array.from(el.children).map((el) => {
              el.classList.remove('find');
              setTimeout(() => {
                el.classList.add('find');
              }, 100);
            });
          });
        }}
      >
        查找 0-0-14 行
      </button>
      <br />
      <br />
      <PETable
        ref={ref}
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        defaultOpenRowKeys={['0-0']}
        useVirtual
      />
    </div>
  );
};
```

```jsx
/**
 * title: 异步追加数据
 * description: 异步展开节点的时候，进行数据的追加处理。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 150,
    align: 'left',
    alignHeader: 'center',
  }));

  const dig = (path = '0', level = 3) => {
    const list = [];
    for (var i = 0; i < 15; i += 1) {
      const id = `${path}-${i}`;
      const treeNode = {
        id,
        isLeaf: false,
      };

      columns.map(({ dataIndex }) => {
        treeNode[dataIndex] = id + '-' + dataIndex + '列';
      });

      if (level > 0) {
        treeNode.children = dig(id, level - 1);
      } else {
        treeNode.isLeaf = true;
      }

      list.push(treeNode);
    }
    return list;
  };

  const treeData = dig();

  return (
    <div>
      此示例在全部展开的情况下，共 15列 * (15 + 15 * 15 + 15 * 15 * 15 + 15 * 15
      * 15 * 15)行 = 81.36万个单元格。
      <br />
      <br />
      <PETable
        round
        dataSource={treeData}
        columns={columns}
        maxHeight={500}
        isTree
        useVirtual
      />
    </div>
  );
};
```
