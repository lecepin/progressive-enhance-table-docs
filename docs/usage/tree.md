---
title: 树表格
order: 1
nav:
  title: 示例
group:
  title: 基础
  order: 0
---

设置 `isTree:true` 启动树表格。

树表格的 `dataSource` 通过 `children` 实现树数据的结构。树表格的 展开/折叠 按钮 通过 `isLeaf` 进行显示与隐藏。
展开折叠状态通过 `defaultOpenRowKeys`/`openRowKeys` 实现。

```jsx
/**
 * title: 静态树
 * description: 展开/折叠 按钮通过 `isLeaf` 进行判断，叶子节点不显示按钮。展开后的数据，来自于节点的 `children` 数据。
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
        {
          id: 1,
          name: '张三',
          age: 18,
          sex: '男',
          isLeaf: false,
          children: [
            {
              id: 11,
              name: '张三1',
              age: 118,
              sex: '男1',
              isLeaf: false,
              children: [
                {
                  id: 111,
                  name: '张三12',
                  age: 1128,
                  sex: '男12',
                  isLeaf: true,
                  children: [],
                },
                {
                  id: 112,
                  name: '张三13 非叶子无子',
                  age: 11238,
                  sex: '男13',
                  isLeaf: false,
                  children: [],
                },
              ],
            },
            {
              id: 12,
              name: '张三2 非叶子无子',
              age: 128,
              sex: '男2',
              isLeaf: false,
              children: [],
            },
          ],
        },
        {
          id: 2,
          name: '张四 无',
          age: 19,
          sex: '男',
          isLeaf: true,
          children: [],
        },
        {
          id: 3,
          name: '赵六 非叶子无子',
          age: 21,
          sex: '女',
          isLeaf: false,
          children: [],
        },
      ]}
      defaultOpenRowKeys={[1]}
      isTree
      autoWidth
    />
  );
};
```

```jsx
/**
 * title: 异步加载
 * description: 通过 `loadData` 回调函数实现。回调函数提供 record 数据，可根据此数据进行异步数据的获取，获取后进行 `dataSource` 的修改即可。此函数必须返回 `Promise`。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const [asyncDs, setAsyncDs] = React.useState([
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: '男',
      isLeaf: false,
      children: [],
    },
    {
      id: 2,
      name: '李四(加载后 无节点)',
      age: 19,
      sex: '男',
      isLeaf: false,
      children: [],
    },
    {
      id: 3,
      name: '王五',
      age: 21,
      sex: '女',
      isLeaf: false,
      children: [],
    },
    {
      id: 4,
      name: '赵六(加载后 报错)',
      age: 19,
      sex: '男',
      isLeaf: false,
      children: [],
    },
  ]);

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
      dataSource={asyncDs}
      loadData={(record) => {
        console.log({ record });
        console.log('load data...');
        return new Promise((resolve, rej) => {
          setTimeout(() => {
            setAsyncDs((asyncDs) => {
              const loop = function (cols) {
                cols.forEach((col) => {
                  if (col.id === record.id) {
                    if (col.id === 2) {
                      col.isLeaf = true;

                      return;
                    }

                    if (col.id === 4) {
                      rej();
                      return;
                    }

                    col.children = [...new Array(3)].map((_, i) => ({
                      ...record,
                      id: `${record.id}-${i + 1}`,
                      name: `${record.name}-${i + 1}`,
                    }));

                    return;
                  }
                  if (col.children) {
                    loop(col.children);
                  }
                });
              };

              loop(asyncDs);
              return [...asyncDs];
            });

            resolve();
          }, 1000 + 2000 * Math.random());
        });
      }}
      isTree
      autoWidth
    />
  );
};
```

```jsx
/**
 * title: 分组视图
 * description: 通过 `isTreeGroupView:true` 开启。会将树表格的第一层节点进行分组风格的显示。
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
        {
          id: 1,
          name: '张三',
          age: 18,
          sex: '男',
          isLeaf: false,
          children: [
            {
              id: 11,
              name: '张三1',
              age: 118,
              sex: '男1',
              isLeaf: false,
              children: [
                {
                  id: 111,
                  name: '张三12',
                  age: 1128,
                  sex: '男12',
                  isLeaf: true,
                  children: [],
                },
                {
                  id: 112,
                  name: '张三13 非叶子无子',
                  age: 11238,
                  sex: '男13',
                  isLeaf: false,
                  children: [],
                },
              ],
            },
            {
              id: 12,
              name: '张三2 非叶子无子',
              age: 128,
              sex: '男2',
              isLeaf: false,
              children: [],
            },
          ],
        },
        {
          id: 2,
          name: '张四 无',
          age: 19,
          sex: '男',
          isLeaf: true,
          children: [],
        },
        {
          id: 3,
          name: '赵六 非叶子无子',
          age: 21,
          sex: '女',
          isLeaf: false,
          children: [],
        },
      ]}
      defaultOpenRowKeys={[1]}
      isTree
      isTreeGroupView
      autoWidth
      round
    />
  );
};
```

```jsx
/**
 * title: 行拖动排序
 * description: 通过 `canDragRow:true` 开启拖动行模式，可在 `dataSource` 中的 `isCanDrag:false` 来关闭当行行的拖动行为。<br /> - `onDragRowIsAvailable(drag, drop)` 方法交由用户处理当前位置是否可以被拖入。<br /> - `onDragRowEnd(drag, drop, pos)` 用来结束拖入的回掉。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const [ds, setDs] = React.useState([
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: '男',
      isLeaf: false,
      children: [
        {
          id: 11,
          name: '张三1',
          age: 118,
          sex: '男1',
          isLeaf: false,
          children: [
            {
              id: 111,
              name: '张三12',
              age: 1128,
              sex: '男12',
              isLeaf: true,
              children: [],
            },
            {
              id: 112,
              name: '张三13 非叶子无子',
              age: 11238,
              sex: '男13',
              isLeaf: false,
              children: [],
            },
          ],
        },
        {
          id: 12,
          name: '张三2 非叶子无子',
          age: 128,
          sex: '男2',
          isLeaf: false,
          children: [],
        },
      ],
    },
    {
      id: 2,
      name: '张四 无',
      age: 19,
      sex: '男',
      isLeaf: true,
      children: [],
    },
    {
      id: 3,
      name: '赵六 非叶子无子',
      age: 21,
      sex: '女',
      isLeaf: false,
      children: [],
    },
  ]);

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
      dataSource={ds}
      defaultOpenRowKeys={[1]}
      isTree
      autoWidth
      round
      canDragRow
      onDragRowIsAvailable={(drag, drop) => {
        // 禁止父节点拖入子节点
        function loop(nodes, drop) {
          if (!Array.isArray(nodes)) {
            return;
          }
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id == drop.id) {
              return true;
            }

            if (loop(nodes[i].children, drop)) {
              return true;
            }
          }
        }

        return !loop(drag?.children, drop);
      }}
      onDragRowEnd={(drag, drop, pos) => {
        function loopInsert(nodes, dragNode, dropNode, pos) {
          if (!Array.isArray(nodes)) {
            return;
          }
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id == dropNode.id) {
              nodes.splice(pos == 'top' ? i : i + 1, 0, dragNode);
              return true;
            }
            if (loopInsert(nodes[i].children, dragNode, dropNode, pos)) {
              return true;
            }
          }
        }
        function loopDel(nodes, dragNode) {
          if (!Array.isArray(nodes)) {
            return;
          }
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].id == dragNode.id) {
              nodes.splice(i, 1);
              return true;
            }

            if (loopDel(nodes[i].children, dragNode)) {
              return true;
            }
          }
        }
        loopDel(ds, drag);
        loopInsert(ds, drag, drop, pos);
        setDs([...ds]);
      }}
    />
  );
};
```
