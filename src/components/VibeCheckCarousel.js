import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import moment from "moment-timezone";
import Axios from 'axios';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import {isMobile, isMobileOnly} from 'react-device-detect';


const ratingFaces=(rateNumber)=>{
  switch(rateNumber){
    case 1:
    return  <div >
        <img src={'http://localhost:3001/images/1.png'} height={'30px'}  weight={'30px'} />
        <img src={'http://localhost:3001/images/g2.png'} height={'30px'}  weight={'30px'} />
        <img src={'http://localhost:3001/images/g3.png'} height={'30px'}  weight={'30px'} />
        <img src={'http://localhost:3001/images/g4.png'} height={'30px'}  weight={'30px'} />
        <img src={'http://localhost:3001/images/g5.png'} height={'30px'}  weight={'30px'} />
      </div>
    break
    case 2:
      return  <div >
          <img src={'http://localhost:3001/images/g1.png'} height={'30px'}  weight={'30px'} />
          <img src={'http://localhost:3001/images/2.png'} height={'30px'}  weight={'30px'} />
          <img src={'http://localhost:3001/images/g3.png'} height={'30px'}  weight={'30px'}/>
          <img src={'http://localhost:3001/images/g4.png'} height={'30px'}  weight={'30px'} />
          <img src={'http://localhost:3001/images/g5.png'} height={'30px'}  weight={'30px'} />
        </div>
      break
      case 3:
        return  <div >
            <img src={'http://localhost:3001/images/g1.png'} height={'30px'}  weight={'30px'} />
            <img src={'http://localhost:3001/images/g2.png'} height={'30px'}  weight={'30px'} />
            <img src={'http://localhost:3001/images/3.png'} height={'30px'}  weight={'30px'} />
            <img src={'http://localhost:3001/images/g4.png'} height={'30px'}  weight={'30px'} />
            <img src={'http://localhost:3001/images/g5.png'} height={'30px'}  weight={'30px'} />
          </div>
        break
        case 4:
          return  <div>
              <img src={'http://localhost:3001/images/g1.png'} height={'30px'}  weight={'30px'} />
              <img src={'http://localhost:3001/images/g2.png'} height={'30px'}  weight={'30px'} />
              <img src={'http://localhost:3001/images/g3.png'} height={'30px'}  weight={'30px'} />
              <img src={'http://localhost:3001/images/4.png'} height={'30px'}  weight={'30px'} />
              <img src={'http://localhost:3001/images/g5.png'} height={'30px'}  weight={'30px'} />
            </div>
          break
          case 5:
            return  <div>
                <img src={'http://localhost:3001/images/g1.png'} height={'30px'}  weight={'30px'} />
                <img src={'http://localhost:3001/images/g2.png'} height={'30px'}  weight={'30px'} />
                <img src={'http://localhost:3001/images/g3.png'} height={'30px'}  weight={'30px'} />
                <img src={'http://localhost:3001/images/g4.png'} height={'30px'}  weight={'30px'} />
                <img src={'http://localhost:3001/images/5.png'} height={'30px'}  weight={'30px'} />
              </div>
            break

  }

}

const useStyles = theme => ({
  // root: {
  // //  margin: 250,
  // },
  // root: {
  //   minWidth: 275,
  // },
  root: {
   // minWidth: 275,

    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
  },
  card:{
    width: 250,
marginBottom:10,
marginTop:10,
padding:10
    // display: 'flex',
    // flexWrap: 'wrap',
    // '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
    //   height: theme.spacing(16),
    // },
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
  paper:{
       display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
    //  margin: theme.spacing(1),
   //   width: theme.spacing(16),
   //   height: theme.spacing(16),
    }
  }
 
});


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1195 },
    items: 4
  },
  smallDesktop:{
    breakpoint: { max: 1195, min: 888 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 888, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

//  const deviceType=()=>{
// const md = new MobileDetect(userAgent);

//     if (md.tablet()) {
//       deviceType = "tablet";
//     } else if (md.mobile()) {
//       deviceType = "mobile";
//     } else {
//       deviceType = "desktop";
//     }
//     return { deviceType };
//   }

class VibeCheckCarousel extends Component {
  constructor() {
    super();
    this.state = {
      feedbackData:[]
    };

    this.classes = useStyles;
    // this.classes = useStyles;
    // this.classes = useStyles;
   // this.deviceType = deviceType();
  }


  handleCarouselData=()=> {
  //  setAuthToken(`Bearer ${localStorage.jwtToken}`);
    var self = this;
    console.log(this.props.match.params.websiteID);
    var websiteID=this.props.match.params.websiteID;
    let endDate = moment().tz('America/Los_Angeles').format('YYYY-MM-DD');
    let startDate = moment().tz('America/Los_Angeles').subtract(7, 'day').format('YYYY-MM-DD');
    //  console.log(`/API/websiteFeedbacks?startDate=${startDate}&endDate=${endDate}`);
    Axios.get(`https://reviews-ai.ngrok.io/carousel?websiteID=${websiteID}`)
      .then(res => {
        //   console.log('rate numbers-->', res.data.data);
        console.log('data-->', res.data)
        self.setState({ feedbackData: res.data });
      })
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.handleCarouselData();
  }

  render() {
    console.log(this.props.match.params.websiteID);
    console.log(this.props);
    const { classes } = this.props;

    const bull = <span className={classes.bullet}>•</span>;
console.log(isMobile)

    return (

    <Carousel 
      swipeable={true}
      responsive={responsive}
      autoPlay={isMobile ? false : true}
      showDots={isMobile ? true : false}
      autoPlaySpeed={1500}
      infinite={true}
      transitionDuration={2500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px carousel-item-margin-40-px"
      >
        {this.state.feedbackData.map((item,index)=>(
          <Card key={index} className={classes.card}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            {ratingFaces(item.rate)}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
            {moment(item.createdTime ).tz('America/Los_Angeles').format('MMMM DD, YYYY - HH:mm:ss')}
            </Typography>
            <Typography variant="h6" component="h6">
            {item.nickName}
            </Typography>
            <Typography variant="body2" component="p">
            {item.details}
            </Typography>
          </Card>
        ))}
        </Carousel>
    );
  }
}
export default withStyles(useStyles)(VibeCheckCarousel)