import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';

// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';

import moment from "moment-timezone";
import Axios from 'axios';


const useStyles = theme => ({
  root: {
    display: 'flex',
  }
 
});


class VibeCheckWidget extends Component {
  constructor() {
    super();
    this.state = {

    };

    this.classes = useStyles;
  }


  handleWidgetData() {
   // setAuthToken(`Bearer ${localStorage.jwtToken}`);
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


    return (
      <div className={classes.root}>

      </div>
    );
  }
}
export default withStyles(useStyles)(VibeCheckWidget)


/////////////////////////////////////////////////////



