/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React, { useState,useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";


function TransparentBlogCard({ image, title, description, action,clickedDelete,clickedEdit,shortlistPage,isApplicant,isApplicantOptions }) {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  const [displayOptions,setdisplayOptions]=useState(false);
  const [applicantOptions,setapplicantOptions]=useState(false);


  const showOptions=()=>{
    setdisplayOptions(true);
    setapplicantOptions(true);
  }

  const hideOptions=()=>{
    setdisplayOptions(false);
    setapplicantOptions(false);
  }

  //applicantOptions


  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius="lg"
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
      />
      <MKBox
        borderRadius="lg"
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
        }}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {/* {action.type === "internal" ? (
        <Link to={action.route}>{imageTemplate}</Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          {imageTemplate}
        </MuiLink>
      )} */}
      {/* isApplicantOptions */}
      <div onMouseLeave={() => hideOptions()} onMouseOver={() => showOptions()}>
      {displayOptions && !isApplicant  ? <div style={{position:"absolute",top:"5px",right:"5px",zIndex:"2"}}>
       <MKButton onClick={clickedEdit} style={{marginRight:"5px"}} variant="contained" color="white"  iconOnly>
        <Icon>edit</Icon>
      </MKButton> 
      <MKButton onClick={clickedDelete} variant="contained" color="white" iconOnly>
        <Icon>delete</Icon>
      </MKButton>
      </div>:null}
      {applicantOptions && isApplicant && !isApplicantOptions  ? <div style={{position:"absolute",top:"5px",right:"5px",zIndex:"2"}}>
       <MKButton onClick={clickedEdit} style={{marginRight:"5px",padding:"5px 30px"}} variant="contained" color="white"  iconOnly>
        <p>Apply</p>
      </MKButton> 
      </div>:null}
      {isApplicantOptions && applicantOptions ? <div style={{position:"absolute",top:"5px",right:"5px",zIndex:"2"}}>
        <MKButton onClick={clickedEdit} style={{marginRight:"5px",padding:"5px 30px"}} variant="contained" color="white"  iconOnly>
        <Icon>edit</Icon>
        </MKButton>
        <MKButton onClick={clickedDelete} style={{marginRight:"5px",padding:"5px 30px"}} variant="contained" color="white"  iconOnly>
        <Icon>delete</Icon>
        </MKButton> 
      </div>:null}
      {imageTemplate}
      </div>
      <MKBox pt={2} pb={3}>
        {/* {action.type === "internal" ? (
          <Link to={action.route} sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink href={action.route} target="_blank" rel="noreferrer" sx={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </MuiLink>
        )} */}
        <MKTypography style={{textOverflow: "ellipsis",overflow: "hidden",display: "-webkit-box",WebkitLineClamp: "6",
    WebkitBoxOrient: "vertical",whitespace: "normal"}} variant="body2" component="p" color="text" mb={3}>
          {description}
        </MKTypography>
        {/* {action.type === "internal" ? (
          <MKTypography
            component={Link}
            to={action.route}
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
            onClick={shortlistPage}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            component={MuiLink}
            href={action.route}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
            onClick={shortlistPage}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        )} */}
       {isApplicant?null: <MKTypography
            variant="body2"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
            onClick={shortlistPage}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>}
      </MKBox>
    </Card>
  );
}

// Typechecking props for the TransparentBlogCard
TransparentBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]),
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.oneOf([
      "inherit",
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "light",
      "dark",
      "text",
    ]).isRequired,
  }).isRequired,
};

export default TransparentBlogCard;
