/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import axios from '../../../../axios';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';


import MKTypography from "components/MKTypography";
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../../../store/index';
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import Account from "pages/LandingPages/Author/sections/Account";
import InfoCard from "pages/LandingPages/Author/sections/InfoCard";
import bg6 from "assets/images/bg6.jpg";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile(props) {

  const openShortlistPage=()=>{
    props.setshowForm("none");  
  }

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
      {props.showForm=="shortlistClosedPage" || props.showForm=="shortlistPage"?<MKBox onClick={()=>openShortlistPage()} style={{position: 'absolute', left: 0, top: 0}}>
              <KeyboardBackspaceRoundedIcon fontSize="large" color="info" style={{marginLeft: "25px", marginTop:"-600px", borderStyle: "outset", borderRadius: "6px"}}/>
          </MKBox>:null}
        <Grid container item xs={12} justifyContent="center" mx="auto">
          {/* <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox> */} 
         
          <MKBox style={{position: 'absolute', right: 0, top: 0}}>
              <Account/>
            </MKBox>
          <Grid container py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox style={{position: 'absolute', right: '200px', top: '50px'}} height="20px" width="350px"><InfoCard/></MKBox>
              <MKBox display="flex" justifyContent="left" mb={1} >
                  <MKTypography fontWeight="bold" variant="h3">Welcome {props.userFirstName} {props.userLastName}</MKTypography>
                </MKBox>
                <Grid container justifyContent="left" py={4} mb={1}>
                  <MKTypography variant="h5" style={{marginRight: "150px"}}>Post a job on Castit and you’ll begin receiving applications from qualified candidates straight away.
                    Join our community of actors, film, TV and theatre professionals, voice over artists, extras, dancers, singers, musicians & child actors.
                  </MKTypography >
                  <MKTypography variant="h5" style={{marginTop: "30px"}}>START HIRING TODAY!</MKTypography>
                </Grid>
                <Grid container style={{left: '5px', top: '200px'}}>
                  <DefaultCounterCard
                    count={props.directorActivePosts.length-props.directorCloseCount}
                    suffix="+"
                    title="Ongoing Projects"
                    //description="Mix the sections, change the colors and unleash your creativity"
                  />
                  <DefaultCounterCard
                    count={props.directorCloseCount}
                    title="Closed project"
                    //description="Mix the sections, change the colors and unleash your creativity"
                  />
                </Grid>
                {/* <MKButton variant="outlined" color="info" size="small">
                  Follow
                </MKButton> */}
              
              {/* <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid> */}
              {/* <MKTypography variant="body1" fontWeight="light" color="text">
                Decisions: If you can&apos;t decide, the answer is no. If two equally difficult
                paths, choose the one more painful in the short term (pain avoidance is creating an
                illusion of equality). Choose the path that leaves you more equanimous. <br />
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  More about me <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
                </MKTypography>
              </MKTypography> */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
const mapStateToProps = (state) => {
  return {
    userFirstName:state.ScreenIt.userFirstName,
    userLastName:state.ScreenIt.userLastName,
    showForm:state.ScreenIt.showForm,
    directorActivePosts:state.ScreenIt.directorActivePosts,
    directorCloseCount:state.ScreenIt.directorCloseCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
