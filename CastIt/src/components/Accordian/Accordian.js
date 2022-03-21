import React, { useState,useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Contact3 from '../../pages/LandingPages/Author/sections/Contact3';
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../store/index';

function ControlledAccordions(props) {
  const [expanded, setExpanded] = React.useState(false);
  useEffect(() => {
    
}, [props.accordianArray]);

  const handleChange = (panel,id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    props.getcurrentAccordianAppId(id);
    props.setshowAccordian("accordian");
  };


  return (
    <div>

{(props.accordianArray).map((application, index) => {
                    if(application.shortlistingStatus=="N")
                    {
                    return (
                        <Accordion expanded={expanded === index} onChange={handleChange(index,application.applicantFormId)}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {application.userFirstName}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{application.percentageMatch}%</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          <Contact3 charWidth="45% !important" />
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                    }
                    else
                    {
                        return null;
                    }
                  })}
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
        matchedCandidates:state.ScreenIt.matchedCandidates
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getcurrentAccordianAppId: (value) => dispatch(actions.getcurrentAccordianAppId(value)),
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    setshowAccordian: (value) => dispatch(actions.setshowAccordian(value))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ControlledAccordions);