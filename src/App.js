import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';
import SwipeableTextMobileStepper from './carousel'

function App() {
  return (
    <>

      <React.Fragment>
        <CssBaseline />

        <Container fixed>
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} className="big-div">
            <div>
              משקלתא
            </div>
            <div>
              חיסכון אדיר בזמן ובכסף
            </div>
            <p>
              
            פה תוכלו לקבל הצעה למשכנתא האטרקטיבית ביותר בעבורך בלחיצת כפתור בלי לצאת מהבית וללא צורך בידע מוקדם וכל זה עם מיטב הבנקים והיועצים   
            </p>
            <Button variant="contained" size="medium">לצפיה בהצעות קודמות שהתקבלו באתר</Button>
            <div className="btn-sign">
            <Button variant="contained" size="medium">רישום</Button>
            <Button variant="contained" size="medium">כניסה</Button>
            </div>
           {/* <SwipeableTextMobileStepper/> */}
          </Typography>
        </Container>
      </React.Fragment>

    </>
  );
}

export default App;
