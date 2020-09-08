import React from 'react';

class NoMatch extends React.Component {

    constructor(props) {
        super(props);
        this.state  = {
            word: "The page Not Found"
        }
    }

    render () { 
        const { word } = this.state; 
        return (
            <h1>
                {word}
            </h1>
        )
    }
}

export default NoMatch;
