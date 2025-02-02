// import React,{useState,useEffect} from 'react'
// import Head from 'next/head';
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   FormHelperText,
//   Link,
//   TextField,
//   Card,
//   Typography
// } from '@mui/material';
// import { DashboardLayout } from '../../../../components/dashboard-layout';
// import Table from '../../../../components/Table'
// import ToolBar from "../../../../components/ToolBar";

// const RawMaterial = () => {
//   const [data, setData] = useState([]);
//   const columns = [
//     {title: "Id", field: "userId"},
//     {title: "Title", field: "title"},
//     { title: "Name", field: "raw_name" },
//     { title: "Quantity", field: "raw_quantity" },
//     { title: "Description", field: "raw_description" },
//     { title: "Material Code", field: "raw_materialcode" },
//     { title: "Specification", field: "raw_spec" },
//     { title: "Material Unit", field: "raw_materialunit" },
//     { title: "Value", field: "raw_value" },
//     { title: "Reference Number", field: "raw_referncenum" },
//     { title: "Date", field: "raw_date" },
//     { title: "Remark", field: "raw_remark" },
//   ];

//   useEffect(() => {
//     fetch("http://localhost:59000/rawmaterials")
//       .then((resp) => resp.json())
//       .then((resp) => setData(resp));
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>
//           RawMaterial
//         </title>

//       </Head>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 8
//         }}
//       >
//         <Container maxWidth="ml">
//         <ToolBar title="SIV" 
//         href="/warehouse/stockList/RawMaterial/addSiv" />

//           {/* <Typography
//             sx={{ mb: 3 }}
//             variant="h4"
//           >
//             Raw Material stockList
//           </Typography> */}
//           <Card maxWidth="lg">

//         <Table 
//           title='Raw Material stockList' 
//           data={data} 
//           columns={columns}
//           options={{
//             actionsColumnIndex: -1,
//             selection: true,

//           }}
//           actions={[
//             {
//               tooltip: 'Remove All Selected Users',
//               icon: 'delete',
//               onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows')
//             }
//           ]}
//           // actions={[
//           //   rowData => ({
//           //     icon: () => <NextLink href={`/procurment/purchaserequest/rfq`}><NavigateNextIcon /></NextLink>,
//           //     tooltip: 'Edit ',
//           //     onClick:()=> (rowData)
//           //   }) 
//           // ]}
//           />

//         {/* <Typography sx={{ mb: 3 }} variant="h4">
//           Supplier
//         </Typography> */}
//       </Card>
//         </Container>
//       </Box>
//     </>
//   )
// };

// RawMaterial.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

// export default RawMaterial;



// import React,{useState,useEffect} from 'react'
// import Head from 'next/head';
// import {
//   Box,
//   Button,
//   Checkbox,
//   Container,
//   FormHelperText,
//   Link,
//   TextField,
//   Card,
//   Typography
// } from '@mui/material';
// import { DashboardLayout } from '../../../../components/dashboard-layout';
// import Table from '../../../../components/Table'
// import ToolBar from '../../../../components/ToolBar'

// const FinishedGoods = () => {
//   const [data, setData] = useState([]);
//   const columns = [
//     { title: "Name", field: "finished_name" },
//     { title: "Quantity", field: "finished_quantity" },
//     { title: "Description", field: "finished_description" },
//     { title: "Material Code", field: "finished_materialcode" },
//     { title: "Specification", field: "finished_spec" },
//     { title: "Material Unit", field: "finished_materialunit" },
//     { title: "Value", field: "finished_value" },
//     { title: "Reference Number", field: "finished_referncenum" },
//     { title: "Date", field: "finished_date" },
//     { title: "Remark", field: "finished_remark" },
//   ];
//   useEffect(() => {
//     fetch("http://versavvy.com:59000/finishedMaterial")
//       .then((resp) => resp.json())
//       .then((resp) => setData(resp));
//   }, []);
//   return (
//     <>
//       <Head>
//         <title>
//         Finished Goods
//         </title>
//       </Head>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           py: 8
//         }}
//       >
//         <Container maxWidth="ml">
//         <ToolBar title="SIV"
//         href="/warehouse/stockList/FinishedGoods/addSiv" />

//           {/* <Typography
//             sx={{ mb: 3 }}
//             variant="h4"
//           >
//             Raw Material stockList
//           </Typography> */}
//           <Card maxWidth="lg">

//         <Table
//           title='Finished Goods'
//           data={data}
//           columns={columns}
//           // actions={[
//           //   rowData => ({
//           //     icon: () => <NextLink href={`/procurment/purchaserequest/rfq`}><NavigateNextIcon /></NextLink>,
//           //     tooltip: 'Edit ',
//           //     onClick:()=> (rowData)
//           //   })
//           // ]}
//           />

//         {/* <Typography sx={{ mb: 3 }} variant="h4">
//           Supplier
//         </Typography> */}
//       </Card>
//         </Container>
//       </Box>
//     </>
//   )
// };

// FinishedGoods.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

// export default FinishedGoods;

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { DashboardLayout } from "../../../../components/dashboard-layout";
import waxios from '../../../../components/wareHouseAxios'
// import styles from '../styles/Home.module.css';
import Table from "../../../../components/Table";
import SummarizeIcon from '@mui/icons-material/Summarize';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Card,
  Typography,
  Divider
} from "@mui/material";
import OrdersToolBar from "../../../../components/rawMaterials/order-toolbar";
import { OrderResults } from "../../../../components/rawMaterials/order-results";
import RightDrawer from "../../../../components/rawMaterials/RightDrawer";
import Router from 'next/router'


const FinishedGoods = () => {
  const [drawer, setDrawer] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [summery, setSummery] = useState([]);
  const [data, setData] = useState([]);
  // const [width, setWidth] = useState();
  var width;
  // const size = useWindowSize();
  if (typeof window != 'undefined') {
    console.log('You are on the browser');
    console.log(window.innerWidth);
    width = window.innerWidth;
  } else {
    console.log('You are on the server')
  }
  const columns = [
    { title: "Name", field: "raw_name" },
    { title: "Quantity", field: "raw_quantity" },
    { title: "Description", field: "raw_description" },
    { title: "Material Code", field: "raw_materialcode" },
    { title: "Specification", field: "raw_spec" },
    { title: "Material Unit", field: "raw_materialunit" },
    { title: "Value", field: "raw_value" },
    { title: "Reference Number", field: "raw_referncenum" },
    { title: "Date", field: "raw_date" },
    { title: "Remark", field: "raw_remark" },
  ];

  useEffect(() => {
    waxios.get("/rawmaterials")
      .then((response) => {
        setData(response.data)
      })
      .catch((response) => {
        console.log(response)
      })
  }, []);


  return (
    <>
      <Head>
        <title>RawMaterials | Proplast</title>
      </Head>
      <Box component="main"
        sx={{
          // display: ''
        }}
      >
        <Container
          sx={{
            display: {
              xs: 'none',
              lg: 'block'
            }
          }}
          maxWidth='ml'>
          <Card maxWidth='lg'>
            <Table
              title='Raw Materials'
              data={data}
              columns={columns}
              actions={[
                (rowData) => ({
                  icon: () => <SummarizeIcon size='small' />,
                  tooltip: 'Summary',
                  onClick: () => {
                    Router.push({
                      pathname: "/warehouse/stockList/RawMaterial/monthlyReport",
                      query: {
                        id: rowData.id,
                      } 
                    })
                  }
                })
              ]}
              localization={{
                header: {
                  actions: "SUMMARY"
                }
              }}
            >

            </Table>
          </Card>
        </Container>

        <Container
          sx={{
            display: {
              xs: 'block',
              lg: 'none'
            }
          }}
          maxWidth={false}>
          <Box>
            <OrdersToolBar drawer={drawer}></OrdersToolBar>
            <OrderResults
              drawer={drawer}
              setDrawer={setDrawer}
              setSelectedOrder={setSelectedOrder}
              setSummery={setSummery}
              data={data}
              width={width}
            />
            <Box>
              <RightDrawer
                drawer={drawer}
                setDrawer={setDrawer}
                selectedOrder={selectedOrder}
                summery={summery}
              />
            </Box>
            <Divider sx={{ borderColor: "gray", mt: 3 }} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

FinishedGoods.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default FinishedGoods;
