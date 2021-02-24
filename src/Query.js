import { Button, Container, List, ListItemText, Typography } from '@material-ui/core';
import * as React from 'react';
import {
  useQueryParams,
  NumberParam,
  ArrayParam,
  withDefault,
} from 'use-query-params';

const getRandomRoute = (length = 12) => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz-';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const UseQueryParamsExample = () => {
  // something like: ?num=123&q=foo&filters=a&filters=b&filters=c in the URL
  const [query, setQuery] = useQueryParams({
    num: NumberParam,
    urlStrings: withDefault(ArrayParam, []),
  });
  const { num, urlStrings } = query;

  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() =>
        setQuery(
          { num: Math.random(), urlStrings: [...urlStrings, getRandomRoute(64)] },
          'push'
        )
      }
      >
        Change random num, add random URL string</Button>
      {/* <Button variant="contained" color="primary" onClick={() => setQuery({ num: Math.random() })}>Change random num</Button> */}
      <Button variant="contained" color="secondary" onClick={() => setQuery({ num: null, urlStrings: null })}>Reset</Button>
      <Typography variant="h1">
        URL length: {window.location.href.length}
      </Typography>
      <Typography variant="h2">
        num: {num}
      </Typography>
      <Typography variant="h2">
        There are {urlStrings.length} urlStrings:
      </Typography>
      <List dense>
        {urlStrings.map((f) => <ListItemText>{`${f}`}</ListItemText>)}
      </List>
    </Container>
  );
};

export default UseQueryParamsExample;
