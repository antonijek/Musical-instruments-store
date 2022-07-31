import { React, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, Modal, Checkbox } from "@mui/material";
import { style } from "../utils";
import { verify } from "../api";

export default function Table({ title, columns, rows }) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});

  let token = localStorage.getItem("token");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const showMOreDetails = (e) => {
    handleOpen();
    setDetails(e.row);
    console.log(e.row);
  };

  const verifyUser = async () => {
    try {
      const res = await verify(details.id, token);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", my: "5%", color: "text.secondary" }}
        >
          {title}
        </Typography>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          autoPageSize
          autoHeight
          onRowClick={showMOreDetails}
        />
      </div>

      <div>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            {details.email ? (
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  User datails
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {details.first_name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {details.last_name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {details.email}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {details.id}
                </Typography>
                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <Checkbox sx={{ mt: 2 }} onChange={verifyUser} />
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Instrument details
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </Typography>
              </Box>
            )}
          </Box>
        </Modal>
      </div>
    </div>
  );
}
