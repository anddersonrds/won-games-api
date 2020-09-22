import React from "react";

import Wrapper from "./Wrapper";

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        Desenvolvido por {' '}
        <a
          key="website"
          href="https://github.com/anddersonrds"
          target="_blank"
          rel="noopener noreferrer"
        >
          @anddersonrds
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;

