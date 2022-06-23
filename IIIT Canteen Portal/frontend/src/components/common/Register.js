import { useState } from "react";
import axios from "axios";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  FormControl,
  FormLabel,
  InputLabel,
  Input,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema
.is().min(8)                                   
.is().max(100)                                 
.has().uppercase()                             
.has().lowercase()                             
.has().digits(1)                        
.has().not().spaces() 

const BuyerReg = () => {
  const [name,setName] = useState("") ;
  const [email,setEmail] = useState("") ;
  const [verifyEmail,setVerifyEmail] = useState(false) ;
  const [verifyEmailText,setVerifyEmailText] = useState("") ;
  const [contactNumber,setContactNumber] = useState("") ;
  const [verifyNum,setVerifyNumber] = useState(false) ;
  const [verifyAge,setVerifyAge] = useState(false) ;
  const [ageText,setAgeText] = useState("") ;
  const [numberText,setNumberText]= useState("") ;
  const [age,setAge] = useState("") ;
  const [batch,setBatch] = useState() ;
  const [password,setPassword] = useState("") ;
  const [verifyPassword,setVerifyPassword]=useState("") ;  
  const [validatePassword,setvalidatePassword]=useState(false) ;
  const [validationText,setValidationText]=useState("") ;

  function handleName(event){
    var value=event.target.value ;
    setName(value) ;
  }

  function handleEmail(event){
    var value=event.target.value ;
    if(value.includes("@")){
      setEmail(value) ;
      setVerifyEmail(false) ;
      setVerifyEmailText("") ;
    }
    else{
      setVerifyEmail(true) ;
      setVerifyEmailText("Email should contain @") ;
    }
  }

  function handleContactNumber(event){
    var value=event.target.value ;
    if(isNaN(value))
    {
      setVerifyNumber(true) ;
      setNumberText("Contact Number should only contain numbers")
    }
    else
    {
      setVerifyNumber(false) ;
      setNumberText("") ;
      setContactNumber(value) ;
    }
  }

  function handleAge(event){
    var value=event.target.value ;
    if(isNaN(value))
    {
      setVerifyAge(true) ;
      setAgeText("Age should be a number") ;
    }
    else
    {
      setVerifyAge(false) ;
      setAgeText("") ;
      setAge(value) ;
    }
  }

  function handlePassword(event){
    var value=event.target.value ;
    if(schema.validate(value))
    {
      setvalidatePassword(false) ;
      setValidationText("") ;
      setPassword(value) ;
    }
    else
    {
      setvalidatePassword(true) ;
      setValidationText("Password should be atleast of length 8 and should contain a lowercase,uppercase and a digit and should not contain spaces")
    }
  }



  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ marginTop: "2%", marginRight: "25%", marginLeft: "25%" }}
    >
      <Grid item>
        <TextField
          label="Name"
          placeholder="Enter Your Name"
          style={{ width: "120%" }}
          onChange={handleName}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          error={verifyEmail}
          label="Email"
          placeholder="Enter Your Email"
          style={{ width: "120%" }}
          helperText={verifyEmailText}
          onChange={handleEmail}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          error={verifyNum}
          helperText={numberText}
          label="Contact-Number"
          placeholder="Enter Your Contact Number"
          style={{ width: "120%" }}
          onChange={handleContactNumber}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          error={verifyAge}
          helperText={ageText}
          label="Age"
          placeholder="Enter Your Age"
          style={{ width: "120%" }}
          onChange={handleAge}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Batch"
          placeholder="Select Your Batch"
          style={{ width: "120px", marginLeft: "17%" }}
          select
        >
          <MenuItem value={1}>UG-1</MenuItem>
          <MenuItem value={2}>UG-2</MenuItem>
          <MenuItem value={3}>UG-3</MenuItem>
          <MenuItem value={4}>UG-4</MenuItem>
          <MenuItem value={5}>UG-5</MenuItem>
        </TextField>
      </Grid>
      <Grid item>
        <TextField
          error={validatePassword}
          helperText={validationText}
          label="Set Password"
          type="password"
          placeholder="Enter Password"
          style={{ width: "120%" }}
          onChange={handlePassword}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Re-Enter Password"
          type="password"
          placeholder="Re-Enter Password"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item sx={{ marginTop: "2%" }}>
        <Button variant="contained" style={{ marginLeft: "40px" }}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

const VendorReg = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      direction="column"
      sx={{ marginTop: "2%", marginRight: "25%", marginLeft: "25%" }}
    >
      <Grid item>
        <TextField
          label="Name"
          placeholder="Enter Your Name"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Email"
          placeholder="Enter Your Email"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Shop Name"
          placeholder="Enter Your Shop Name"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Contact Number"
          placeholder="Enter Your Contact Number"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Canteen Opening time (24hr format)"
          placeholder="Enter Your Canteen Opening time"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Canteen Closing time (24hr format)"
          placeholder="Enter Your Canteen Closing time"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Set Password"
          type="password"
          placeholder="Enter Password"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>
      <Grid item>
        <TextField
          label="Re-Enter Password"
          type="password"
          placeholder="Re-Enter Password"
          style={{ width: "120%" }}
        ></TextField>
      </Grid>      
      <Grid item sx={{ marginTop: "2%" }}>
        <Button variant="contained" style={{ marginLeft: "40px" }}>
          Register
        </Button>
      </Grid>
    </Grid>
  );
};

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState(null);
  const [buyer, setBuyer] = useState(true);
  const [buyercolor, setBuyercolor] = useState("cyan");
  const [vendorcolor, setVendorcolor] = useState("white");

  const onChangeUsername = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const resetInputs = () => {
    setName("");
    setEmail("");
    setDate(null);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: name,
      email: email,
      date: Date.now(),
    };

    axios
      .post("http://localhost:4000/user/register", newUser)
      .then((response) => {
        alert("Created\t" + response.data.name);
        console.log(response.data);
      });

    resetInputs();
  };

  return (
    <Grid container>
      <h1 style={{ marginLeft: "48%" }}>Register</h1>
      <Grid item lg={12} sx={{ marginLeft: "44%", marginTop: "2%" }}>
        <ToggleButtonGroup color="primary" style={{ marginLeft: "6%" }}>
          <ToggleButton
            value="web"
            style={{ background: buyercolor, color: "black" }}
            onClick={() => {
              setBuyer(true);
              setBuyercolor("cyan");
              setVendorcolor("white");
            }}
          >
            Buyer
          </ToggleButton>
          <ToggleButton
            value="android"
            style={{ background: vendorcolor, color: "black" }}
            onClick={() => {
              console.log("reached");
              setBuyer(false);
              setBuyercolor("white");
              setVendorcolor("cyan");
            }}
          >
            Vendor
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      {buyer ? <BuyerReg /> : <VendorReg />}
    </Grid>
  );
};

export default Register;
