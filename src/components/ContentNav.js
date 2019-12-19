import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './css/pageStyles';

export default function ContentNav(props) {
  const classes = useStyles();

  return (
    <div className={classes.stickyNav}>
      <Paper>
        <Typography variant="h6" component="h3" gutterBottom className={classes.navTitle}>
          {props.title}
        </Typography>
        <ul className={classes.navigation}>
          {props.navigation.map((item, index) => {
            return (
              <HashLink key={index} to={item.link}>
                <li className={classes[props.classItem]}>{item.text}</li>
              </HashLink>
            )
          })}
        </ul>
      </Paper>
    </div>
  )
}
