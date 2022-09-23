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

// const Accessories = () => {
//   const [data, setData] = useState([]);
//   const columns = [
//     { title: "Name", field: "accs_name" },
//     { title: "Quantity", field: "accs_quantity" },
//     { title: "Description", field: "accs_description" },
//     { title: "Material Code", field: "accs_materialcode" },
//     { title: "Specification", field: "accs_spec" },
//     { title: "Material Unit", field: "accs_materialunit" },
//     { title: "Value", field: "accs_value" },
//     { title: "Reference Number", field: "accs_referncenum" },
//     { title: "Date", field: "accs_date" },
//     { title: "Remark", field: "accs_remark" },
//   ];
//   useEffect(() => {
//     fetch("http://localhost:59000/accessory")
//       .then((resp) => resp.json())
//       .then((resp) => setData(resp));
//   }, []);
//   return (
//     <>
//       <Head>
//         <title>
//         Accessories
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
//         href="/warehouse/stockList/Accessories/addSiv"  />

//           {/* <Typography
//             sx={{ mb: 3 }}
//             variant="h4"
//           >
//             Raw Material stockList
//           </Typography> */}
//           <Card maxWidth="lg">
        
//         <Table 
//           title='Accessories' 
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

// Accessories.getLayout = (page) => (
//   <DashboardLayout>
//     {page}
//   </DashboardLayout>
// );

// export default Accessories;




import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import { DashboardLayout } from "../../../../components/dashboard-layout";

// import styles from '../styles/Home.module.css';
import OrdersToolBar from "../../../../components/Accessories/order-toolbar";
import { OrderResults } from "../../../../components/Accessories/order-results";
import RightDrawer from "../../../../components/Accessories/RightDrawer";

const Accessories = () => {
  const [drawer, setDrawer] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState([]);
  const [selectedSummery, setSummery] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:59000/accessory")
      .then((resp) => resp.json())
      .then((resp) => setData(resp));
  }, []);
  return (
    <>
      <Head>
        <title>Orders | Material Kit</title>
      </Head>
      <Box component="main">
        <Container maxWidth={false}>
          <Box>
            <OrdersToolBar drawer={drawer}></OrdersToolBar>
            <OrderResults
              drawer={drawer}
              setDrawer={setDrawer}
              setSelectedOrder={setSelectedOrder}
              setSummery={setSummery}
              data={data}
            />
            <RightDrawer
              drawer={drawer}
              setDrawer={setDrawer}
              selectedOrder={selectedOrder}
              selectedSummery={selectedSummery}
            />
            <Divider sx={{ borderColor: "gray", mt: 3 }} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Accessories.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Accessories;

