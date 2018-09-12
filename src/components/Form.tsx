import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import * as React from 'react';


interface Props{
    onSearchClick: (enteredWord: string) => void;
}

interface State{
    newWord: string,
    inputError: string,
    name: 'Composed TextField'
}

export const initialState: State={
    inputError:"Please enter a word.",
    newWord: "",
    name: 'Composed TextField' 
}

export default class Form extends React.Component<Props, State> {
    constructor(props:any) {
        super(props);
        this.state = initialState;
    }
    public render() 
        {return (
            <div>
                <FormControl>
                    <Typography variant="body2">
                        <InputLabel >Enter a word here</InputLabel>
                        <Input className="input" onChange={this.handleChange} />
                    </Typography>
                </FormControl>
                <Button size="medium" variant="fab" color="primary" className="button" onClick={this.onClick}>Search</Button>             
            </div>
        );
    }

    private onClick=(event: React.MouseEvent<HTMLElement>) => {
        const word = this.state.newWord;
        if(word){
            this.props.onSearchClick(word);
        }
        else{
            alert("Enter a word.")
        }
    }

    private handleChange = (event: any) => {
        const inputValue = event.currentTarget.value;
        const newState: State = {newWord: inputValue, inputError:"", name: "Composed TextField"}
        this.setState(newState);
    };
}