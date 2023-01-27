import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://svgshare.com/i/CbP.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/lucasyuk1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @lucasyuk1
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;