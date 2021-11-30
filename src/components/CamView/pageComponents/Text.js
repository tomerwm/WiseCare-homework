import { Container, makeStyles} from "@material-ui/core";
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(1),
  },
  title: {
    color: '#1976d2',
    display:'inline',
  },
}));

const Text = () => {
const classes = useStyles();

  return (
    <Container className={classes.container}>
       <Typography variant="h4" component="div">
         It's not just a LiveStream it's <Typography className={classes.title} variant="h1">BlazePose</Typography>
       </Typography>
       <Typography variant="body1" component="div">
       Human pose estimation from video plays a critical role in various applications such as quantifying physical exercises, sign language recognition, and full-body gesture control. For example, it can form the basis for yoga, dance, and fitness applications. It can also enable the overlay of digital content and information on top of the physical world in augmented reality.
        MediaPipe Pose is a ML solution for high-fidelity body pose tracking, inferring 33 3D landmarks and background segmentation mask on the whole body from RGB video frames utilizing our BlazePose research that also powers the ML Kit Pose Detection API. Current state-of-the-art approaches rely primarily on powerful desktop environments for inference, whereas our method achieves real-time performance on most modern mobile phones, desktops/laptops, in python and even on the web.
       </Typography>
    </Container>
  );
};
export default Text;
