---
title: 常规
order: 0
nav:
  title: 示例
group:
  title: 基础
  order: 0
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
 * description: 使用 `autoWidth:true`，所有单元格自动分配屏幕宽度，实际内容宽度小于屏幕宽度时，会沾满屏幕宽度。此模式下不会出现水平滚动条。列数过多时，会出现挤压问题，且后面的列宽调整也会有问题，此类场景建议关闭此属性。
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
 * title: 全宽
 * description: 当不使用 `autoWidth` 时，表格实际宽度小于屏幕宽度，右侧会存在空白，可开启 `fullWidth:true` 属性，填充空白区域。
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
      fullWidth
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

```jsx
/**
 * title: 最大高度
 * description: 使用 `maxHeight` 实现。
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
        },
        {
          dataIndex: 'sex',
          title: '性别',
          align: 'center',
        },
        {
          dataIndex: 'age',
          title: '年龄',
        },
      ]}
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
        { id: 11, name: '张三', sex: '男', age: '18' },
        { id: 12, name: '李四', sex: '女', age: '28' },
        { id: 13, name: '王五', sex: '女', age: '48' },
        { id: 14, name: '赵六', sex: '男', age: '8' },
      ]}
      autoWidth
      maxHeight={200}
    />
  );
};
```

```jsx
/**
 * title: 行高
 * description: 使用 `rowHeight` 实现。目前最小可设置值为 36，可以通过 `cellProps` 修改 `td` 的 `padding` 实现更小的值。行高只为默认最小高度，实际高度取决于内容的高度。
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
      autoWidth
      rowHeight={50}
    />
  );
};
```

```jsx
/**
 * title: 表头分组
 * description: 使用 `columns` 实现。在 `column` 提供包含 `children` 的结构即可。含有 `children` 的节点，可以不设置 `dataIndex`。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  return (
    <PETable
      dataSource={[
        {
          id: 1,
          name: '张三',
          sex: '男',
          age: '18',
          boy: '1',
          girl: '2',
          bj: '3',
          sh: '4',
          hz: '5',
        },
        { id: 2, name: '李四', sex: '女', age: '28', out: 6 },
      ]}
      columns={[
        {
          dataIndex: 'name',
          title: '姓名',
          alignHeader: 'center',
          align: 'center',
          width: 100,
        },
        {
          dataIndex: 'sex',
          title: '性别',
          alignHeader: 'center',
          children: [
            {
              dataIndex: 'boy',
              title: '男',
              width: 100,
            },
            { dataIndex: 'girl', title: '女', width: 100 },
          ],
        },
        {
          dataIndex: 'age',
          title: '年龄',
          width: 100,
        },
        {
          dataIndex: 'addr',
          title: '地区',
          alignHeader: 'center',
          children: [
            {
              dataIndex: 'in',
              title: '国内',
              alignHeader: 'center',

              children: [
                {
                  dataIndex: 'bj',
                  title: '北京',
                  width: 100,
                },
                {
                  dataIndex: 'sh',
                  title: '上海',
                  width: 100,
                },
                {
                  dataIndex: 'hz',
                  title: '杭州',
                  width: 100,
                },
              ],
            },
            { dataIndex: 'out', title: '国外', width: 100 },
          ],
        },
      ]}
      autoWidth
    />
  );
};
```

```jsx
/**
 * title: 冻结列
 * description: 使用 `columns` 中的 `lock` 属性实现。注意 必须关闭 `autoWidth`，否则无法水平滚动。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const [dir, setDir] = React.useState('left');
  const columns = [...new Array(30)].map((item, index, arr) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
    lock:
      dir === 'left'
        ? index < 2
          ? 'left'
          : false
        : dir === 'right'
        ? index >= arr.length - 2
          ? 'right'
          : false
        : dir === 'both'
        ? index < 2
          ? 'left'
          : index >= arr.length - 2
          ? 'right'
          : false
        : false,
  }));

  const dataSource = [...new Array(5)].map((item, rindex) => {
    const rowData = { id: rindex };
    const h = Math.random() * 80 + 40;
    columns.map((item, colindex) => {
      rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
    });

    return rowData;
  });

  return (
    <>
      <input
        type="radio"
        checked={dir == 'left'}
        onClick={() => setDir('left')}
      />
      左侧冻结
      <input
        type="radio"
        checked={dir == 'right'}
        onClick={() => setDir('right')}
      />
      右侧冻结
      <input
        type="radio"
        checked={dir == 'both'}
        onClick={() => setDir('both')}
      />
      两侧冻结
      <br />
      <br />
      <PETable columns={columns} dataSource={dataSource} />
    </>
  );
};
```

```jsx
/**
 * title: 合并单元格
 * description: 使用 `cellProps` 实现。回调函数中会返回表格的行列信息，可以通过此信息进行自定义返回 `colSpan` / `rowSpan` 等数据，进行单元格的合并。注意 树型表格不支持 `rowSpan` 会自动忽略此属性。
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
        {
          title: '其他',
          width: 100,
        },
        {
          title: '其他',
          width: 100,
        },
      ]}
      dataSource={[
        { id: 1, name: '张三', sex: '男', age: '18' },
        { id: 2, name: '李四', sex: '女', age: '28' },
        { id: 3, name: '王五', sex: '女', age: '48' },
        { id: 4, name: '赵六', sex: '男', age: '8' },
      ]}
      cellProps={(rowIndex, colIndex, dataIndex, record) => {
        if (record.name == '张三' && dataIndex == 'name') {
          return { colSpan: 3 };
        }

        if (record.name == '王五' && dataIndex == 'sex') {
          return { colSpan: 2, rowSpan: 2 };
        }
      }}
      autoWidth
    />
  );
};
```

```jsx
/**
 * title: 合并单元格粘住显示
 * description: 使用 `mergedCellsStick:true` 实现。当合并单元格 `rowSpan` 超过一屏的时候，默认只能滚动到中间位置才能看到内容，其它位置都是空白。此属性可以保持在合并的范围内，都可见。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const columns = [...new Array(5)].map((item, index, arr) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const dataSource = [...new Array(20)].map((item, rindex) => {
    const rowData = { id: rindex };
    const h = Math.random() * 80 + 40;
    columns.map((item, colindex) => {
      rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
    });

    return rowData;
  });

  return (
    <PETable
      columns={columns}
      dataSource={dataSource}
      cellProps={(rowIndex, colIndex, dataIndex, record) => {
        if (record['2'] == '1行2列' && dataIndex == '2') {
          return { rowSpan: dataSource.length };
        }

        if (record['3'] == '2行3列' && dataIndex == '3') {
          return { colSpan: 2, rowSpan: 2 };
        }
      }}
      autoWidth
      maxHeight={250}
      mergedCellsStick
    />
  );
};
```

```jsx
/**
 * title: 列宽调整
 * description: 通过在 `columns` 中的项目设置为 `resizable:true`，开启可拖动调整列宽的能力，设置 `minWidth` 可以用来限定最小宽度。在 `onResizeChange` 回调中接受调整后的宽度信息，自行同步到 `columns` 中即可生效。注意 必须关闭 `autoWidth`，否则无法水平滚动。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const [columns, setColumns] = React.useState([
    {
      dataIndex: 'name',
      title: '姓名',
      alignHeader: 'center',
      width: 120,
      minWidth: 100,
      resizable: true,
    },
    {
      dataIndex: 'sex',
      title: '性别',
      width: 100,
      align: 'center',
      resizable: true,
    },
    {
      dataIndex: 'age',
      title: '年龄',
      width: 100,
      resizable: true,
    },
  ]);

  const [columns2, setColumns2] = React.useState(
    [...new Array(30)].map((item, index, arr) => ({
      dataIndex: '' + (index + 1),
      title: '列' + (index + 1),
      width: 100,
      align: 'center',
      alignHeader: 'center',
      resizable: true,
      lock: index < 2 ? 'left' : index >= arr.length - 2 ? 'right' : false,
    })),
  );

  const dataSource2 = [...new Array(5)].map((item, rindex) => {
    const rowData = { id: rindex };
    const h = Math.random() * 80 + 40;
    columns2.map((item, colindex) => {
      rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
    });

    return rowData;
  });

  return (
    <>
      <PETable
        columns={columns}
        dataSource={[
          { id: 1, name: '张三', sex: '男', age: '18' },
          { id: 2, name: '李四', sex: '女', age: '28' },
          { id: 3, name: '王五', sex: '女', age: '48' },
          { id: 4, name: '赵六', sex: '男', age: '8' },
        ]}
        onResizeChange={(colIndex, width) => {
          console.log({ colIndex, width });

          const loop = function (cols) {
            cols.forEach((col) => {
              if (col.dataIndex === colIndex) {
                col.width = width;
                return;
              }
              if (col.children) {
                loop(col.children);
              }
            });
          };

          loop(columns);
          setColumns([...columns]);
        }}
      />

      <h5>冻结列中依然有效</h5>
      <PETable
        columns={columns2}
        dataSource={dataSource2}
        onResizeChange={(colIndex, width) => {
          console.log({ colIndex, width });

          const loop = function (cols) {
            cols.forEach((col) => {
              if (col.dataIndex === colIndex) {
                col.width = width;
                return;
              }
              if (col.children) {
                loop(col.children);
              }
            });
          };

          loop(columns2);
          setColumns2([...columns2]);
        }}
      />
    </>
  );
};
```

```jsx
/**
 * title: 重置滚动条位置
 * description: 使用 `resetScrollbarPosition:true` 实现。默认情况下，当切换 `dataSource` 时，滚动条位置会保持不变（前后两者的 `dataSource` 条数差不多 且 设置了 `maxHeight` 的时候），如果需要在切换 `dataSource` 时，重置滚动条初始位置 可以使用该属性。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const [isReset, setIsReset] = React.useState(false);
  const columns = [...new Array(18)].map((item, index, arr) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const [dataSource, setDataSource] = React.useState(
    [...new Array(9)].map((item, rindex) => {
      const rowData = { id: rindex };
      const h = Math.random() * 80 + 40;
      columns.map((item, colindex) => {
        rowData[item.dataIndex] = `${rindex + 1}行${colindex + 1}列`;
      });

      return rowData;
    }),
  );

  return (
    <>
      <input
        type="radio"
        checked={!isReset}
        onClick={() => setIsReset(false)}
      />
      保持滚动条位置
      <input type="radio" checked={isReset} onClick={() => setIsReset(true)} />
      重置滚动条位置
      <br />
      <button
        onClick={() => {
          setDataSource(
            dataSource.map((item) => {
              Object.keys(item).map((key) => {
                item[key] += '.';
              });
              return item;
            }),
          );
        }}
      >
        生成新 dataSource
      </button>
      <br />
      <br />
      <PETable
        resetScrollbarPosition={isReset}
        columns={columns}
        dataSource={dataSource}
        maxHeight={250}
      />
    </>
  );
};
```

```jsx
/**
 * title: 表头自定义插槽
 * description: 可使用 `headerCustomRender` 属性填充 JSX，在表头区域进行渲染。
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
      fullWidth
      headerCustomRender={
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            borderLeft: '1px solid #e6ebf1',
            padding: 7,
          }}
        >
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2280"
            width="22"
            height="22"
          >
            <path
              d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56c10.1-8.6 13.8-22.6 9.3-35.2l-0.9-2.6c-18.1-50.5-44.9-96.9-79.7-137.9l-1.8-2.1c-8.6-10.1-22.5-13.9-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85c-2.4-13.1-12.7-23.3-25.8-25.7l-2.7-0.5c-52.1-9.4-106.9-9.4-159 0l-2.7 0.5c-13.1 2.4-23.4 12.6-25.8 25.7l-15.8 85.4c-35.9 13.6-69.2 32.9-99 57.4l-81.9-29.1c-12.5-4.4-26.5-0.7-35.1 9.5l-1.8 2.1c-34.8 41.1-61.6 87.5-79.7 137.9l-0.9 2.6c-4.5 12.5-0.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5c-10.1 8.6-13.8 22.6-9.3 35.2l0.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c8.6 10.1 22.5 13.9 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4c2.4 13.1 12.7 23.3 25.8 25.7l2.7 0.5c26.1 4.7 52.8 7.1 79.5 7.1 26.7 0 53.5-2.4 79.5-7.1l2.7-0.5c13.1-2.4 23.4-12.6 25.8-25.7l15.7-85c36.2-13.6 69.7-32.9 99.7-57.6l81.3 28.9c12.5 4.4 26.5 0.7 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l0.9-2.6c4.5-12.3 0.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9c-11.3 26.1-25.6 50.7-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97c-28.1 3.2-56.8 3.2-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9z"
              fill="gray"
            ></path>
            <path
              d="M512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m79.2 255.2C570 602.3 541.9 614 512 614c-29.9 0-58-11.7-79.2-32.8C411.7 560 400 531.9 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8C612.3 444 624 472.1 624 502c0 29.9-11.7 58-32.8 79.2z"
              fill="gray"
            ></path>
          </svg>
        </div>
      }
    />
  );
};
```
