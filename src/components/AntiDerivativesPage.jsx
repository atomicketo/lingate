import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Drawer from '../components/Drawer';
import { Card } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    paddingTop: {
        paddingTop: 50
    }
});

export default function AntiDerivativesPage(props) {
    const { back } = props;
    return (
        <React.Fragment>
            <Drawer />
            <Container fixed style={{ marginTop: 80 }}>
                <Card style={{ padding: 20 }}>
                    <p style={{ fontWeight: 'bold', fontSize: 26 }}>
                        Definition of the Anti-Derivative
                    </p>
                    <Button variant="contained" style={{ marginTop: 20, paddingRight: 20, paddingLeft: 20 }} color="#3f51b5" onClick={() => back()}>Back</Button>
                </Card>
            </Container>
        </React.Fragment >
    );
}
