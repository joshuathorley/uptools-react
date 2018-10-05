import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Wrapper from "components/Wrapper";
import Footer from "components/Footer";
import H1 from "components/H1";
import H2 from "components/H2";
import P from "components/P";
import Sponsor from "components/Sponsor";

import Hero from "./styles/hero";
import WhiteArea from "./styles/white";
import Features from "./styles/features";
import Listing from "./styles/listing";
import Button from "./styles/button";

class SupporterComponent extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="UpTools | Become a supporter" />
        <WhiteArea>
          <div className="black-area">
            <Wrapper>
              <Link to="/">
                <img
                  src={require("images/logo.svg")}
                  alt="Up Tools"
                  style={{ marginTop: "66px" }}
                />
              </Link>
              <Hero>
                <H1>Reach the people that matter</H1>
                <P bottom={56} large>
                  We built something useful for your potential customers. Make
                  sure they see you in the best light.
                </P>

                <img
                  className="illo"
                  src={require("./images/illo.png")}
                  srcSet={require("./images/illo@2x.png")}
                />
              </Hero>
            </Wrapper>
          </div>
          <Wrapper largePadding>
            <Features>
              <section>
                <img src={require("./images/discount-icon.svg")} />
                <H2>Add a discount</H2>
                <P>
                  Get the edge on your competitors and attract potential
                  customers by providing them with a sign up discount.
                </P>
              </section>

              <section>
                <img src={require("./images/update-icon.svg")} />
                <H2>Request an update</H2>
                <P>
                  Let us know if you’d prefer we used a different logo or url
                  for your company listing.
                </P>
              </section>
            </Features>

            <Features dark>
              <section>
                <img src={require("./images/heart-icon.svg")} />
                <H2>Become a Sponsor</H2>
                <P>
                  Increase your presence on Up.tools and take pride of place at
                  the head of our listings, whilst supporting our project.
                </P>
              </section>
              <Sponsor
                sponsor={{
                  name: "TwoCards",
                  url: "https://twocards.co/register",
                  imageUrl:
                    "https://s3.us-east-2.amazonaws.com/project-test-joe/Icon.png",
                  sponsor: {
                    description:
                      "Super Fast Professional Invoicing For Freelancers. Helping you send your invoices as quickly as possible, getting you paid faster.",
                    buttons: [
                      {
                        hover: false,
                        label: "Sign up for 30 days free"
                      }
                    ]
                  }
                }}
              />
            </Features>

            <Listing>
              <H1>Make the most of your listing</H1>
              <Button href="mailto:hello@up.tools">Get in touch</Button>
            </Listing>
          </Wrapper>
          <Footer />
        </WhiteArea>
      </div>
    );
  }
}

export default SupporterComponent;
