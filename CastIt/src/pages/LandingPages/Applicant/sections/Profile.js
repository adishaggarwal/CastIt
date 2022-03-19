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
import MKTypography from "components/MKTypography";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import Account from "pages/LandingPages/Applicant/sections/Account";
import InfoCard from "pages/LandingPages/Author/sections/InfoCard";

import { connect } from "react-redux";

// Images
import profilePicture from "assets/images/bruce-mars.jpg";

function Profile(props) {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
    <Container>
      <Grid container item xs={12} justifyContent="center" mx="auto">
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
                <MKTypography variant="h5">Castit - Your's first step towards success</MKTypography>
              </Grid>
              <Grid container style={{left: '5px', top: '200px'}}>
                <DefaultCounterCard
                  count={props.applicantActivePosts.length}
                  suffix="+"
                  title="Active Posts"
                  //description="Mix the sections, change the colors and unleash your creativity"
                />
                <DefaultCounterCard
                  count={props.applicantAppliedPosts.length}
                  title="Applied Posts"
                  //description="Mix the sections, change the colors and unleash your creativity"
                />
              </Grid>
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
    applicantActivePosts:state.ScreenIt.applicantActivePosts,
    applicantAppliedPosts:state.ScreenIt.applicantAppliedPosts,
  };
};

export default connect(mapStateToProps, null)(Profile);
