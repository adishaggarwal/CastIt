import React, { useState,useEffect } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import MKButton from "components/MKButton";
import Contact4 from '../../pages/LandingPages/Author/sections/Contact4';
import { useDispatch, useSelector, shallowEqual,connect } from "react-redux";
import * as actions from '../../store/index';

const ControlledAccordions1=(props)=> {
  const [expanded, setExpanded] = React.useState(false);
  const [checkCount, setcheckCount] = useState(0);

  useEffect(() => {
    
    }, [props.accordianArray,checkCount]);

    

  const handleChange = (panel,id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    props.getcurrentAccordianAppId2(id);
    props.setshowAccordian2("accordian");
  };

  const handlecheckchange=(id)=>{
    let result = (props.shortlistedCandidates).findIndex((obj) => {
      return obj.userRegisteredId === id;
    });
    let formData=props.shortlistedCandidates;
    const formCopy=[...formData];
    let count=formCopy[result].checked ? (checkCount-1) : (checkCount+1);
    setcheckCount(count);

    formCopy[result].checked=!formCopy[result].checked;
    props.setShortlistedCandidates(formCopy);
  }

  return (
    <div>

{(props.accordianArray).map((application, index) => {
  if(application.shortlistingStatus=="Y")
  {
                    return (
                        <Accordion expanded={expanded === index} onChange={handleChange(index,application.userRegisteredId)}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Checkbox
                            checked={application.checked}
                            onChange={()=>handlecheckchange(application.userRegisteredId)}
                            // inputProps={{ 'aria-label': 'controlled' }}
                          />
                          <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {application.userFirstName}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary' }}>{application.percentageMatch}%</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>
                          <Contact4 charWidth="45% !important" />
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
                  <MKButton disabled={checkCount==0 && false} onClick={props.finaliseCandidates} variant="gradient" color="info">
                              Finalize selected Applicants
                            </MKButton>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      matchedCandidates:state.ScreenIt.matchedCandidates,
      shortlistedCandidates:state.ScreenIt.shortlistedCandidates
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getcurrentAccordianAppId2: (value) => dispatch(actions.getcurrentAccordianAppId2(value)),
    setshowForm: (value) => dispatch(actions.setshowForm(value)),
    setshowAccordian2: (value) => dispatch(actions.setshowAccordian2(value)),
    setShortlistedCandidates: (value) => dispatch(actions.setShortlistedCandidates(value)),
    setmatchedCandidates: (value) => dispatch(actions.setmatchedCandidates(value)),
    finaliseCandidates: () => dispatch(actions.finaliseCandidates()),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ControlledAccordions1);