import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


class Success extends Component {

    continue = e => {
        e.preventDefault();
        //Process Form 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }   


    render() {
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <br />
                    <h1>Thank You For Your Submission</h1>
                    <p>You Will Get an Email With Further Instructions.</p>
                </React.Fragment>
            </MultiThemeProvider>
        )
    }
}



export default Success
