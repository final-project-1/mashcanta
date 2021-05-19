import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SwipeableTextMobileStepper from './carusel'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

export const Home = () => {

    let history = useHistory();

    const signup = () => {
        history.push("/signup");
    }

    const signin = () => {
        history.push("/signin");
    }
    return (
        <React.Fragment>
            <CssBaseline />

            <Container fixed>

                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} className="big-div">
                    <div>
                        <div>
                            משקלתא
                </div>
                        <div>
                            חיסכון אדיר בזמן ובכסף
                </div>
                        <div className="carusel">
                            <SwipeableTextMobileStepper />
                        </div>


                        <div className="btn-sign">
                            <Button variant="contained" size="medium" onClick={signup}> רישום</Button>
                            <Button variant="contained" size="medium" onClick={signin}>כניסה</Button>
                        </div>

                        <p>

                            פה תוכלו לקבל הצעה למשכנתא האטרקטיבית ביותר בעבורך בלחיצת כפתור בלי לצאת מהבית וללא צורך בידע מוקדם וכל זה עם מיטב הבנקים והיועצים
</p>

                        <Button variant="contained" size="medium">לצפיה בהצעות קודמות שהתקבלו באתר</Button>


                    </div>

                </Typography>
            </Container>
        </React.Fragment>
    )
}