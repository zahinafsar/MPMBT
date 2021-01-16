import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

function Schedule() {

  const rows = [
    {team1:"Zahin",team2:"Naime",date:"01/12/2021",point:"",winner:""},
  ];

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Team(1)</TableCell>
            <TableCell align="center">Team(2)</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Point</TableCell>
            <TableCell align="center">Winner</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow key={i}>
              <TableCell align="center">{row.team1}</TableCell>
              <TableCell align="center">{row.team2}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.point}</TableCell>
              <TableCell align="center">{row.winner}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
function Ranking() {

  const ranking = [
    {name:"Naime",img:"./img/naime.png",point:"Point: 0"},
    {name:"Rinku",img:"./img/rinku.png",point:"Point: 0"},
    {name:"Hamza",img:"./img/hamza.png",point:"Point: 0"},
    {name:"Zahin",img:"./img/zahin.png",point:"Point: 0"},
  ]

  return (
    <List>
      {ranking.map((team, i) => (
        <ListItem>
        <ListItemAvatar>
          <img style={{marginRight:'30px'}}width="80px" src={team.img} />
        </ListItemAvatar>
        <ListItemText primary={team.name}/>
        <ListItemText primary={team.point} />
      </ListItem>))}
    </List>
  );
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Paper>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Schedule" />
          <Tab label="Ranking" />
        </Tabs>
        </Paper>
        {
          value == 0 ? Schedule() : Ranking()
        }
    </div>
  );
}

export default App;
