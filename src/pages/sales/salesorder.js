import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  TextField,
  MenuItem,
  Select,
  FormGroup,
  Checkbox,
  Box,
  Button,
  Card,
  InputLabel,
  ButtonBox,
  Container,
  Typography,
  Grid,
  DatePicker,
} from "@mui/material";
import { DashboardLayout } from "../../components/dashboard-layout";
import Table from "../../components/Table";
import ToolBar from "../../components/ToolBar";
import Link from "@mui/material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useForm } from "react-hook-form";

const SalesOrder = () => {
  const [status, setStatus] = React.useState("");

  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState();
  const [payment, setPayment] = useState();
  const [fullForm, setForm] = useState();

  const handleDateChange = (newValue) => {
    setValue(newValue);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handlePaymentChange = (newValue) => {
    setPayment(newValue);
  };

  const newRequest = (data) => {
    console.log(data);

    console.log(value);
    const newForm = {
      ...data,
        sales_date: value,
        payment_status: payment.target.value,
      
    };
    console.log(newForm);
    fetch("http://localhost:4000/creatSalesOrder", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newForm),
    });
  };
  return (
    <>
      <Head>
        <title>SalesOrder</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Card sx={{ width: "70%", padding: "2%" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <form onSubmit={handleSubmit(newRequest)}>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={12}>
                    <Typography variant="h5">Sales Order</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="company_name"
                      label="Company Name"
                      type="text"
                      fullWidth
                      {...register("company_name")}
                    />
                  </Grid>
                  <Grid item>
                    <DesktopDatePicker
                      sx={{ maxWidth: 500 }}
                      name="order_date"
                      label="Date"
                      inputFormat="MM/dd/yyyy"
                      value={"2014-08-18T21:11:54"}
                      onChange={handleDateChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="h7">Customer Information/Account Information</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="customer_name"
                      label="Contact Name"
                      type="text"
                      fullWidth
                      {...register("customer_name")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="cus_bussinessName"
                      label="Business Name"
                      type="text"
                      fullWidth
                      {...register("cus_bussinessName")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="cus_phoneNum"
                      label="Phone Number"
                      type="text"
                      fullWidth
                      {...register("cus_phoneNum")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="cus_email"
                      label="Email Address"
                      type="text"
                      fullWidth
                      {...register("cus_email")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="h7">Shipping Address</Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ship_contactName"
                      label="Contact Name"
                      type="text"
                      fullWidth
                      {...register("ship_contactName")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ship_address1"
                      label="Address 1"
                      type="text"
                      fullWidth
                      {...register("ship_address1")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ship_address2"
                      label="Address 2"
                      type="text"
                      fullWidth
                      {...register("ship_address2")}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="ship_city"
                      label="City/State"
                      type="text"
                      fullWidth
                      {...register("ship_city")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="h7">Order Information</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_item1"
                      label="Item Orderd 1"
                      type="text"
                      fullWidth
                      {...register("Ordered_item1")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_Quantity1"
                      label="Quantity"
                      type="text"
                      fullWidth
                      {...register("Ordered_Quantity1")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_item2"
                      label="Item Orderd 2"
                      type="text"
                      fullWidth
                      {...register("Ordered_item2")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_Quantity2"
                      label="Quantity"
                      type="text"
                      fullWidth
                      {...register("Ordered_Quantity2")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_item3"
                      label="Item Orderd 3"
                      type="text"
                      fullWidth
                      {...register("Ordered_item3")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Ordered_Quantity3"
                      label="Quantity"
                      type="text"
                      fullWidth
                      {...register("Ordered_Quantity3")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                  
                      name="Ordered_item4"
                      label="Item Orderd 4"
                      type="text"
                      fullWidth
                      {...register("Ordered_item4")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                     
                      name="Ordered_Quantity4"
                      label="Quantity"
                      type="text"
                      fullWidth
                      {...register("Ordered_Quantity4")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <Typography variant="h7">Payment information</Typography>
                  </Grid>

                  <Grid item lg={12} sm={6}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={payment}
                        label="Payment method"
                        onChange={handlePaymentChange}
                      >
                        <MenuItem value={"Pending"}>Pending</MenuItem>
                        <MenuItem value={"Half_Paied"}>Half Paied</MenuItem>
                        <MenuItem value={"Paied"}>Paied</MenuItem>
                        <MenuItem value={"Pending"}>Pending</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Business_Name"
                      label="Business Name"
                      type="text"
                      fullWidth
                      {...register("Business_Name")}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      name="Business_Tin"
                      label="Tin Number"
                      type="number"
                      fullWidth
                      {...register("Business_Tin")}
                    />
                  </Grid>

                  <Grid item>
                    <Button type="submit" sx={{ marginRight: "2rem" }} variant="outlined">
                      Save
                    </Button>
                    <Button variant="outlined">Cancel</Button>
                  </Grid>
                </Grid>
              </form>
            </LocalizationProvider>
          </Card>
        </Box>
      </Box>
    </>
  );
};

SalesOrder.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default SalesOrder;
