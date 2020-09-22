import React from 'react';
import Wrapper from './Wrapper';

function LeftMenuFooter() {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a
          key="website"
          href="https://github.com/anddersonrds"
          target="_blank"
          rel="noopener noreferrer"
        >
          @anddersonrds
        </a>
        &nbsp;
        <a href="https://reactavancado.com.br" target="_blank" rel="noopener noreferrer">
          — React Avançado
        </a>
      </div>
    </Wrapper>
  );
}

export default LeftMenuFooter;
