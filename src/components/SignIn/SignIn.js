import React from 'react';


class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signInEmail: '',
            signInPass: ''
        }
    }

    onEmailChange =(event) => {
        this.setState({signInEmail : event.target.value})
    }

    onPassChange = (event) => {
        this.setState({signInPass: event.target.value});
    }

    onSubmitSignIn = () =>{
       fetch('http://localhost:3001/signin',{
           method:'post',
           headers:{'Content-Type':'application/json'},
           body: JSON.stringify({
               email: this.state.signInEmail,
               pass: this.state.signInPass
           })
       }).then(response => response.json())
       .then(data =>{
           if(data !== "Wrong credentials" && data !== "unable to get user"){
                this.props.loadUser(data);
                this.props.onRouteChange('home');
           }
           else if(data === "Wrong credentials"){
               this.setState({signInErr: true})
           }
           else{
            this.setState({signInErr: true});
            console.log("Something went wrong in the database...")
           }
       })  
    }

    render(){
        const {onRouteChange} = this.props;
        return(
            <article className="br4 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
                <div> 
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                    <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                    <input onChange={this.onPassChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                                </div>
                            </fieldset>
                            <div className="">
                                <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
                            </div>
                            {(this.state.signInErr)
                                ? <div>
                                    <p className='dark-red'>Wrong email or password</p>
                                </div>
                                : <div></div>
                            }
                            <div className="lh-copy mt3">
                                <p onClick={() => onRouteChange('register') } className="f6 link dim black db pointer">Register</p>
                            </div>
                        </div>
                    </main>
                </div>
            </article> 
            )
    }
}

export default SignIn;