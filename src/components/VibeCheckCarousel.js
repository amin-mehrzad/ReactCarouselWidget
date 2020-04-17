import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



import moment from "moment-timezone";
import Axios from 'axios';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const useStyles = theme => ({
  // root: {
  // //  margin: 250,
  // },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class VibeCheckCarousel extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.classes = useStyles;
  }


  handleWidgetData() {
  //  setAuthToken(`Bearer ${localStorage.jwtToken}`);
    var self = this;
    let endDate = moment().tz('America/Los_Angeles').format('YYYY-MM-DD');
    let startDate = moment().tz('America/Los_Angeles').subtract(7, 'day').format('YYYY-MM-DD');
    //  console.log(`/API/websiteFeedbacks?startDate=${startDate}&endDate=${endDate}`);
    Axios.get(`/API/websiteFeedbacks?startDate=${startDate}&endDate=${endDate}`)
      .then(res => {
        //   console.log('rate numbers-->', res.data.data);
        console.log('data-->', res.data.data[0]);

        const feedbacks = res.data.data[0];
        self.setState({ feedbacks: feedbacks });
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
   // this.handleWidgetData();
  }

  render() {
   // console.log(this.state);
    const { classes } = this.props;

    const bull = <span className={classes.bullet}>•</span>;


    return (
       <div className={classes.root}>
      <Carousel 
      responsive={responsive}
      autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={500}
      infinite={true}
      // customTransition="all .7"
      transitionDuration={1500}
      >
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Carousel>
       </div>
    );
  }
}
export default withStyles(useStyles)(VibeCheckCarousel)


/////////////////////////////////////////////////////



