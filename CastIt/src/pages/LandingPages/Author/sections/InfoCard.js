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
    icon="touch_app"
    title={
      <>
        Feel the
        <br />
        Material Kit
      </>
    }
    description="All the MUI components that you need in a development have been re-design with the new look."
  />
  <RotatingCardBack
    image="https://bit.ly/32ZoTGx"
    title="Discover More"
    description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
    action={{ type: "internal", route: "/", label: "start with header" }}
  />
</RotatingCard>

    );
}

export default InfoCard;
