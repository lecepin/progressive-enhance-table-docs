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

  const dataSource = [...new Array(80)].map((item, rindex) => {
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
      此示例为 80列 *
      15行，可以看到在滚动过程中，由于修正高度导致的滚动条的高度变化。
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

:::warning{title=TODO}
在不定高场景下，定位到最后一屏的行时，目前会由于高度修正逻辑，导致无法显示出定位的元素。
:::

```jsx
/**
 * title: 合并单元格效果
 * description: 同 `cellProps` 中的配置。<br /> 以上是虚拟表格场景下合并单元格超过表格高度的效果。
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
        mergedCellsStick
        cellProps={(rowIndex, colIndex, dataIndex, record) => {
          if (record['2'] == '1行2列' && dataIndex == '2') {
            return { rowSpan: 20 };
          }

          if (record['3'] == '2行3列' && dataIndex == '3') {
            return { colSpan: 2, rowSpan: 2 };
          }
        }}
      />
    </div>
  );
};
```

```jsx
/**
 * title: 删除行
 * description: 需要调用实例方法 `ref.delRow(primaryKey)` 实现。
 */
import React from 'react';
import PETable from 'pe-table';

export default () => {
  const ref = React.useRef();

  const columns = [...new Array(15)].map((item, index) => ({
    dataIndex: '' + (index + 1),
    title: '列' + (index + 1),
    width: 100,
    align: 'center',
    alignHeader: 'center',
  }));

  const dataSource = [...new Array(80)].map((item, rindex) => {
    const rowData = { id: rindex };
    const h = Math.random() * 80 + 40;

    columns.map((item, colindex) => {
      rowData[item.dataIndex] = (
        <div
          style={{
            height: h,
          }}
        >
          {colindex === 0 ? (
            <div>
              <button
                onClick={() => {
                  ref.current.delRow(rowData.id);
                }}
              >
                删除行
              </button>
            </div>
          ) : null}
          {`${rindex + 1}行${colindex + 1}列`}
        </div>
      );
    });

    return rowData;
  });

  return (
    <div>
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

:::warning
做删除操作时，请不要直接对 `dataSource` 进行修改，会导致表格的滚动条重置到顶端，或者 高度偏移 等问题。
请调用实例方法 `delRow` 来实现。
获取内部 dataSource 请使用实例方法 `getDataSource` 来实现。
:::
