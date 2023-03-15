import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createActionAdd } from "../../reducers/currencyForm";
import API from "../../API/apiProvider";
import { fields } from "../../constants/formFields";
import {
	FormControl,
	InputLabel,
	Input,
	Button,
	Box,
	TextField,
	MenuItem,
} from "@mui/material";

const Form = () => {
	const initState = {
		currency: "",
		quantity: "",
		date: "",
		price: "",
	};
	const [formState, setFormState] = useState(initState);
	const [options, setOptions] = useState([]);

	const api = new API();
	const getSymbols = () => {
		api
			.getCurrencySymbols()
			.then((resp) => {
				return resp.symbols;
			})
			.then((resp) => {
				setOptions(Object.keys(resp));
			});
	};
	useEffect(() => {
		getSymbols();
	}, []);

	const addItemHandler = (e) => {
		e.preventDefault();
		console.log("click");
		console.log(formState, options);
	};

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<>
			<h1>Form</h1>
			<Box
				component="form"
				sx={{
					width: "80%",
					margin: "0 auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					flexWrap: "wrap",
				}}
				autoComplete="off"
				onSubmit={addItemHandler}
			>
				{fields &&
					fields.map((field) => {
						return field.type !== "select" ? (
							<div>
								<InputLabel>{field.label}</InputLabel>
								<Input
									required
									name={field.name}
									value={formState[field.name]}
									onChange={(e) => handleChange(e)}
									type={field.type}
									helperText={field.error}
								/>
							</div>
						) : (
							<TextField
								id="outlined-select-currency"
								select
								label={field.label}
								helperText="Please select your currency"
								onChange={(e) => handleChange(e)}
								defaultValue="EUR"
								name="currency"
							>
								{options.map((option) => {
									return (
										<MenuItem name={option} key={option} value={option}>
											{option}
										</MenuItem>
									);
								})}
							</TextField>
						);
					})}
				<Button type="submit">ADD</Button>
			</Box>
		</>
	);
};
export default Form;
