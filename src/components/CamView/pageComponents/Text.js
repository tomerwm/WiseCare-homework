import { Container, makeStyles, Paper } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
  },
  paper:{
    marginTop: 64,
    backgroundColor:'#E6E7E9',
  },
  color: {
    color: '#1976d2',
  },
}));

const Text = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>

     <Paper className={classes.paper}>
       <Typography variant="h3" component="div">
         Its not just a LiveStream its <Typography className={classes.color}  variant="h3">BlazePose</Typography>
       </Typography>
       <Typography variant="h6" component="div">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
       </Typography>
     </Paper>

    </Container>
  );
};

export default Text;
