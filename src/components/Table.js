import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  table: {
    width: '95%',
    fontSize: '0.8rem',
    margin: '0 auto 1rem',
    border: '1px solid rgba(0, 0, 56, 0.6)',
    borderCollapse: 'collapse',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
      lineHeight: 1.1,
    },
  },
  title: {
    fontSize: '0.9rem',
    lineHeight: 1.4,
    marginBottom: '0.6rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.6rem',
      lineHeight: 1.1,
    },
  },
  firstCell: {
    width: '60%',
    padding: '0.2rem 0.4rem',
  },
  cell: {
    padding: '0.2rem 0.4rem',
    fontFamily: '"Roboto Condensed", sans-serif',
  },
  evenRow: {
    backgroundColor: 'rgba(52, 74, 97, 0.1)',
  }
}));

export default function Table(props) {
  const classes = useStyles();
  const TableHeader = () => {
    if (typeof props.table.th === 'object') {
      return (
        <thead>
          <tr>
            {props.table.th.map((th, index) => {
              if (index === 0) {
                return <th key={index} className={classes.firstCell} >{th}</th>
              } else {
                return <th key={index} className={classes.cell} >{th}</th>
              }
            })}
          </tr>
        </thead>
      )
    } else {
      return <React.Fragment />
    }
  }
  const Td = (props) => {
    let tableTd = props.td;
    if (typeof props.td === 'object') {
      tableTd = props.td.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <span>{item}</span>
            <br />
          </React.Fragment>
        )
      })
    }
    return <td key={props.index} className={classes.cell} >{tableTd}</td>
  }
  const Tr = (props) => {
    return (
      <React.Fragment>
        {props.tr.map((td, index) => {
          return <Td key={index} td={td} index={index} />
        })}
      </React.Fragment>
    )
  }
  const TableFooter = () => {
    if (props.table.hasOwnProperty('tfooter')) {
      return (
        <tfoot>
          <tr>
            <td colSpan="2" className={classes.cell}>{props.table.tfooter}</td>
          </tr>
        </tfoot>
      )
    } else {
      return <React.Fragment />
    }
  }
  const TableBody = () => {
    if (typeof props.table.body === 'object') {
      return (
        <React.Fragment>
          <tbody>
            {props.table.body.map((tr, index) => {
              if (index % 2 === 0) {
                return (
                  <tr key={index} className={classes.evenRow} >
                    <Tr tr={tr} />
                  </tr>
                )
              } else {
                return (
                  <tr key={index}>
                    <Tr tr={tr} />
                  </tr>
                )
              }
            })}

          </tbody>
          <TableFooter />
        </React.Fragment>
      )
    } else {
      return <React.Fragment />
    }
  }

  return (
    <table className={classes.table}>
      <caption>
        <Typography className={classes.title} variant="subtitle2" component="h3">
          {props.table.caption}
        </Typography>
      </caption>
      <TableHeader />
      <TableBody className={classes.body} />
    </table>
  )
}
