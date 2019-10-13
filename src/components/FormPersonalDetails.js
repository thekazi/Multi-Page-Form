import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }   

    render() {
        const {values, handleChange} = this.props;
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <br />
                    <TextField 
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField 
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField 
                        hintText="Enter Your bio"
                        floatingLabelText="bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        styles={styles.button}
                        onClick={this.continue}
                                            />
                        <RaisedButton 
                        label="back"
                        primary={false}
                        styles={styles.button}
                        onClick={this.back}
                                            />
                </React.Fragment>
            </MultiThemeProvider>
        )
    }
}


const styles = {
    button:{
        margin: 15
    }
}
export default FormPersonalDetails
