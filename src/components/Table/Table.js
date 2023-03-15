import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";

import TableContainer from "@mui/material/TableContainer";
import TableHeader from "./TableHeader";

import Paper from "@mui/material/Paper";


export const CurrencyTable = () => {



	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHeader />
				<TableBody>
	
				</TableBody>
			</Table>
		</TableContainer>
	);
};
export default CurrencyTable;
