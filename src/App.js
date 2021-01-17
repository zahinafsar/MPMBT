import React from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

const rows = [
  {team1:"Rinku",team2:"Hamza",date:"18/01/2021",point:"",winner:""},
  {team1:"Naime",team2:"Zahin",date:"18/01/2021",point:"",winner:""},
  {team1:"Hamza",team2:"Naime",date:"18/01/2021",point:"",winner:""},
  {team1:"Zahin",team2:"Rinku",date:"19/01/2021",point:"",winner:""},
  {team1:"Hamza",team2:"Zahin",date:"19/01/2021",point:"",winner:""},
  {team1:"Rinku",team2:"Naime",date:"19/01/2021",point:"",winner:""},
  {team1:"1st Position",team2:"2nd Position",date:"20/01/2021",point:"",winner:""},
];

function Schedule() {

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Team(1)</TableCell>
            <TableCell align="center"></TableCell>
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
              <TableCell align="center">VS</TableCell>
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

  var ranking = [
    {name:"Zahin",img:"./img/z.png",point:0},
    {name:"Hamza",img:"./img/h.png",point:0},
    {name:"Rinku",img:"./img/r.png",point:0},
    {name:"Naime",img:"./img/n.png",point:0},
  ]

  rows.forEach((a) => {
    switch (a.winner) {
      case "Zahin":
        ranking[0].point = ranking[0].point + 2
        break;
      case "Hamza":
        ranking[1].point = ranking[1].point + 2
        break;
      case "Rinku":
        ranking[2].point = ranking[2].point + 2
        break;
      case "Naime":
        ranking[3].point = ranking[3].point + 2
        break;
      default:
        break;
    }
  })

  const sorted = ranking.slice().sort((a, b) => {
    if (a.point < b.point) {
        return 1;
    } else if (a.point > b.point) {
        return -1;
    } else {
        return 0;
    }
  });

  ranking = sorted;


  return (
    <List>
      {ranking.map((team, i) => (
        <div>
        <ListItem>
        <ListItemAvatar>
          <img style={{marginRight:'30px'}}width="80px" src={team.img} />
        </ListItemAvatar>
        <ListItemText primary={`Point:   ${team.point}`} />
        </ListItem>
        <Divider />
        </div>
        ))}
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
          value === 0 ? Schedule() : Ranking()
        }
    </div>
  );
}

export default App;
