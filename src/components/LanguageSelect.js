import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {LanguageConsumer} from '../providers/LanguageProvider';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    minWidth: 50,
  },
  menuItem: {
    fontSize: 12,
  }
}));

export default function LaguageSelect(props) {
  const classes = useStyles();
  const options = props.languages.map((option, index) => {
    return (
      <MenuItem key={index} value={option.language} className={classes.menuItem}>
        {option.language} {option.translation}
      </MenuItem>
    )
  });

  return (
    <LanguageConsumer>
      {(context) => (
        <FormControl>
          <Select value={""} onChange={context.updateLanguage} className={classes.selectEmpty}>
            {options}
          </Select>
        </FormControl>
      )}
    </LanguageConsumer>
  );
}
