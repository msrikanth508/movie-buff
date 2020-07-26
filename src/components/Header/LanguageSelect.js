import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Translate from '@material-ui/icons/Translate';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    display: 'flex',
  },
}));

export default function ({ lang, setAppLanguage }) {
  const classes = useStyles();

  const handleChange = (event) => {
    setAppLanguage(event.target.value);
  };

  return (
    <>
      <Translate />
      <FormControl className={classes.formControl}>
        <Select value={lang} onChange={handleChange} displayEmpty>
          <MenuItem value="en-EN">English</MenuItem>
          <MenuItem value="de-DE">Deutsch</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
