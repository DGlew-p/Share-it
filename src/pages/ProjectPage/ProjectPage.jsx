import React from 'react'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import ProjectForm from '../../components/ProjectForm/ProjectForm'
import NavigationBarRender from '../../components/NavigationBarRender';
import Button from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = withStyles(theme => ({
      
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      }, 
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


export default class ProjectPage extends React.Component {

state = {
    projects: [],
    user_id:"",
    searchNodes: "",
  }


async componentDidMount(){
    try {
      let fetchItemsResponse = await fetch('/api/projects')
      let projects = await fetchItemsResponse.json();
      this.setState({ projects: projects})
      // , user: this.user
    } catch (err) {
      console.error('ERROR:', err)
    }
  }
    
  
    render(){
        const { theme, classes } = this.props;
        return(
            <div>
           <NavigationBarRender />
            <ProjectForm  />
            <ProjectItem  />
        
            </div>
        );
    }

  }