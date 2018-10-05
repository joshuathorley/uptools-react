import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { updateDiscount } from "store/Landing/actions";
import { createStructuredSelector } from "reselect";
import P from "components/P";

import StyledSponsor from "./styles/sponsor";
import SponsorTitle from "./styles/titleCont";
import Title from "./styles/title";
import StyledButton from "./styles/button";

const Sponsor = props => (
  <StyledSponsor className="sponsor">
    <SponsorTitle>
      <img src={props.sponsor.imageUrl} alt={props.sponsor.name} />
      <Title>{props.sponsor.name}</Title>
    </SponsorTitle>
    {props.sponsor.sponsor && [
      <P key={"para"} top={15} bottom={24}>
        {props.sponsor.sponsor.description || ""}
      </P>,
      <div key={"buttons"}>
        {props.sponsor.sponsor.buttons.map((button, index) => (
          <StyledButton
            href={button.url}
            key={index}
            hover={button.hover !== undefined ? button.hover : true}
          >
            {button.label}
          </StyledButton>
        ))}

        {props.sponsor.discount && (
          <StyledButton
            href="#"
            onClick={e => {
              e.preventDefault();
              props.updateDiscount(props.sponsor);
            }}
            hover
          >
            Get {props.sponsor.discount.text}
          </StyledButton>
        )}
      </div>
    ]}
  </StyledSponsor>
);

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({
  updateDiscount: discount => dispatch(updateDiscount(discount))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(Sponsor);
