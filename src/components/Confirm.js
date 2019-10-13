import React, { Component } from 'react'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {

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
        const { values: {firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <MultiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <br />
                    <List>
                        <ListItem 
                        primaryText="First Name"
                        secondaryText={ firstName }
                        />  
                        <ListItem 
                        primaryText="Last Name"
                        secondaryText={ lastName }
                        />
                          <ListItem 
                        primaryText="email"
                        secondaryText={ email }
                        />
                          <ListItem 
                        primaryText="occupation"
                        secondaryText={ occupation }
                        />
                          <ListItem 
                        primaryText="city"
                        secondaryText={ city }
                        />
                          <ListItem 
                        primaryText="bio"
                        secondaryText={ bio }
                        />
                    </List>
                    <br />
                    <RaisedButton 
                        label="Confirm & Continue"
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
export default Confirm
