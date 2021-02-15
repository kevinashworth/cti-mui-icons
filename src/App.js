import React from 'react';
import { Container, Divider, Grid, Typography } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';

import CloseIcon from '@material-ui/icons/Close';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

import LaunchIcon from '@material-ui/icons/Launch';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#F2F2F2',
    color: '#0F1D2F',
  },
  large: {
    color: '#6D6E74',
    fontSize: '6rem',
  },
}));

export default function SvgMaterialIcons () {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
      >
        <Grid>
          <Typography variant='body1'>Regular:</Typography>
        </Grid>
        <Grid>
          <MenuIcon />
          <KeyboardArrowDownIcon />
          <CloseIcon />
          <LaunchIcon />
        </Grid>
        <Grid>
          <Typography variant='h1'>&nbsp;</Typography>
        </Grid>
        <Grid>
          <Typography variant='body1'>Rounded: </Typography>
        </Grid>
        <Grid>
          <MenuRoundedIcon />
          <KeyboardArrowDownRoundedIcon />
          <CloseRoundedIcon />
          <LaunchRoundedIcon />
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.large}
      >
        <Grid item>
          <Typography variant='h4'>Regular</Typography>
        </Grid>
        <Grid item>
          <MenuIcon fontSize='inherit' />
          <KeyboardArrowDownIcon fontSize='inherit' />
          <CloseIcon fontSize='inherit' />
          <LaunchIcon fontSize='inherit' />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        className={classes.large}
      >
        <Grid item>
          <Typography variant='h4'>Rounded</Typography>
        </Grid>
        <Grid item>
          <MenuRoundedIcon fontSize='inherit' />
          <KeyboardArrowDownRoundedIcon fontSize='inherit' />
          <CloseRoundedIcon fontSize='inherit' />
          <LaunchRoundedIcon fontSize='inherit' />
        </Grid>
      </Grid>
    </Container >
  );
}
