import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiSortUp } from 'react-icons/bi';
import { FaFilter } from 'react-icons/fa';

import style from './index.module.scss';

const DataTable = ({ tableTitle, headerNames, renderData, sortItems }) => {

  return (
    <Card className={style.card}>
      <Card.Header className={style.cardHeader}>
        <h6 className={style.cardHeaderTitle}>{tableTitle}</h6>
        <div className={style.listConditions}>
          <Dropdown>
            <Dropdown.Toggle
              className={style.conditionButtons}
              bsPrefix="none"
              id="dropdown-basic"
            >
              <BiSortUp className={style.sortIcon} />
              <span className={style.conditionsText}>Sort</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={style.conditionMenu}>
              { sortItems.map( (item) => {
                return (
                  <Dropdown.Item key={item.event_key} onClick={item.onClick}> {item.name} </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle
              className={style.conditionButtons}
              bsPrefix="none"
              id="dropdown-basic"
            >
              <FaFilter className={style.filterIcon} />
              <span className={style.conditionsText}>Filter</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={style.conditionMenu}>
              <Dropdown.Item>Option 1</Dropdown.Item>
              <Dropdown.Item>Option 2</Dropdown.Item>
              <Dropdown.Item>Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
