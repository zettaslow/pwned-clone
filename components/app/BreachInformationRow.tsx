import { BreachModel } from '../../models/Breach';
import { TableRow, TableCell } from '@material-ui/core';
import HTMLReactParser from 'html-react-parser';
import styles from './BreachInformationRow.module.scss';

export interface BreachInformationRowProps {
  breach: BreachModel 
}

export function BreachInformationRow(props : BreachInformationRowProps) {

  return (
    <TableRow key={props.breach.Name} hover className={styles.breachRow} tabIndex={-1}>
      <TableCell align="left" scope="row" key="title">
        {props.breach.Title}
      </TableCell>
      <TableCell align="left" scope="row" key="logo">
        <img src={props.breach.LogoPath} />
      </TableCell>
      <TableCell align="left" scope="row" key="Domain">
        {props.breach.Domain}
      </TableCell>
      <TableCell align="left" scope="row" key="BreachDate">
        {props.breach.BreachDate}
      </TableCell>
      <TableCell align="left" scope="row" key="AddedDate">
        {props.breach.AddedDate}
      </TableCell>
      <TableCell align="left" scope="row" key="ModifiedDate">
        {props.breach.ModifiedDate}
      </TableCell>
      <TableCell align="left" scope="row" key="Description">
        {HTMLReactParser(props.breach.Description)}
      </TableCell>
      <TableCell align="left" scope="row" key="PwnCount">
        {props.breach.PwnCount}
      </TableCell>
      <TableCell align="left" scope="row" key="DataClasses">
        {props.breach.DataClasses.join(" \n")}
      </TableCell>
      <TableCell align="left" scope="row" key="IsVerified">
        {props.breach.IsVerified.toString()}
      </TableCell>
      <TableCell align="left" scope="row" key="IsFabricated">
        {props.breach.IsFabricated.toString()}
      </TableCell>
      <TableCell align="left" scope="row" key="IsSpamList">
        {props.breach.IsSpamList.toString()}
      </TableCell>
    </TableRow>
  )
}