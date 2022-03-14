import React from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { BiSortUp } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';

import style from './index.module.scss';

const DataTable = ({ tableTitle, headerNames, renderData }) => {
  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <h6 className={style.cardHeaderTitle}>{tableTitle}</h6>
        <div className={style.listConditions}>
          <div className={style.conditions}>
            <BiSortUp className={style.sortIcon} />
            <span className={style.conditionsText}>Sort</span>
          </div>
          <div className={style.conditions}>
            <FaFilter className={style.filterIcon} />
            <span className={style.conditionsText}>Filter</span>
          </div>
        </div>
      </Card.Header>
      <Card.Body className={style.cardBody}>
        <Table responsive="sm">
          <tbody>
            <tr className={style.tableHeaderRow}>
              {headerNames.map((name, idx) => {
                return (
                  <td className={style.headerName} key={idx}>
                    {name}
                  </td>
                );
              })}
              <td></td>
            </tr>
            {renderData()}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DataTable;
