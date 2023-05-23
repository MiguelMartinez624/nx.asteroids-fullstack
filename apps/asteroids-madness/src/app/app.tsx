import styled from 'styled-components';
import {AsteroidsListing} from "./use_cases/asteroids_listing";
import {Typography} from "./commons/ui";


const StyledApp = styled.div`
  .flex {
    display: flex;
  }

  .bg-blue {
    background: darkblue;
  }

  header {
    height: 60px;
    justify-items: center;
    display: flex;
    align-items: center;
  }


  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <div style={{width:"50%"}}>
        <header className="flex bg-blue">
          <Typography type="title" color="white" text="The Asteroids Madness!"/>
        </header>
        <main>
          <AsteroidsListing/>
        </main>
      </div>
    </StyledApp>
  );
}

export default App;
