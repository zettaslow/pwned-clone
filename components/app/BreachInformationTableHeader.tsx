import { TableHead, TableSortLabel } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import React from 'react';
import { HeaderColumn } from './BreachInformationTable';

export interface BreachInformationTableHeaderProps {
  headers: HeaderColumn[],
  orderBy: string,
  order: 'asc' | 'desc',
  handleRequestSort: (e: Event, property: any) => void
}

export function BreachInformationTableHeader(props: BreachInformationTableHeaderProps) {
  const createSortHandler = (property) => (event) => {
    props.handleRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {props.headers.map((column) => {
          return (
            <TableCell 
              align="left" 
              key={column.id} 
              sortDirection={props.orderBy === column.id ? props.order : false}
            >
              <TableSortLabel
                active={props.orderBy === column.id}
                direction={props.orderBy === column.id ? props.order : 'asc'}
                onClick={createSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </TableCell>
          )
        })}
      </TableRow>
    </TableHead>
  )
}