// Material Kit 2 React Examples

import RotatingCard from "examples/Cards/RotatingCard";

import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";

import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";




function InfoCard()

{

    return (

        <RotatingCard>

  <RotatingCardFront

    image="https://bit.ly/3G5JXJZ"

    //icon="touch_app"

    title={

      <>

        Why use the CASTIT network

        <br />

        to find talent & crew?

      </>

    }

    description="The Castit Network is your one-stop solution to make your project come to life"

  />

  <RotatingCardBack

    image="https://bit.ly/32ZoTGx"

    title="Discover More"

    description="We have a community of over 2.42k members including actors, film, TV and theatre professionals,

    voice-over artists, extras, dancers, singers, musicians and child actors."

    // action={{ type: "internal", label: "start with header" }}

  />

</RotatingCard>



    );

}



export default InfoCard;