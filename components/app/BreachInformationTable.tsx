import React, {Dispatch, SetStateAction, useEffect, useState } from 'react';
import { BreachModel } from '../../models/Breach';
import { Table, TableBody } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { BreachInformationRow } from './BreachInformationRow';
import { BreachInformationTableHeader } from './BreachInformationTableHeader';
import { getComparator, stableSort } from '../../lib/dataUtils';

export interface BreachInformationTableProps {
  message: string,
  breaches: BreachModel[]
}

export interface HeaderColumn {
  label: string,
  id: string
}
export const columns: HeaderColumn[] = [
  {label: "Title", id: 'title'},
  {label: "Logo", id: 'logo'},
  {label: "Domain", id: 'domain'},
  {label: "Breach Date", id: 'breachDate'},
  {label: "Added Date", id: 'addedDate'},
  {label: "Modified Date", id: 'modifiedDate'},
  {label: "Description", id: 'description'},
  {label: "Pwn Count", id: 'pwnCount'},
  {label: "Data Classes", id: 'dataClasses'},
  {label: "Is Verified", id: 'isVerified'},
  {label: "Is Fabricated", id: 'isFabricated'},
  {label: "Is Spam List", id: 'isSpamList'}
]

export function BreachInformationTable(props : BreachInformationTableProps) {
  const [order, setOrder]: ['asc' | 'desc', Dispatch<SetStateAction<'asc' | 'desc'>>] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('title');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div>
      <TableContainer>
        <Table>
          <BreachInformationTableHeader
            headers={columns}
            orderBy={orderBy}
            order={order}
            handleRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(props.breaches, getComparator(order, orderBy))
            .map((breachData, index) => {
              return (
                <BreachInformationRow 
                  breach={breachData}
                  key={index+"_"+breachData.name}
                />
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}