import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import Data from "../data.json";
import { styled } from "@mui/material/styles";
import MiniDrawer from "../components/SideNav";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Feedback = () => {
  return (
    <>
      {Data.map((data) => (
        <Box maxWidth="750px" margin="auto" key={data._id} color={"inherit"}>
          <Card
            sx={{
              mb: 2,
              boxShadow: 5,
            }}
          >
            <CardContent>
              <Stack direction="row" display="flex">
                <AccountCircleIcon fontSize="large" />
                <Stack>
                  <Typography
                    variant="h6"
                    component="div"
                    fontWeight="bold"
                    marginLeft="5px"
                  >
                    {data.user}
                  </Typography>
                  <Typography variant="caption" marginLeft="6px">
                    {data.date.substring(0, 10)}
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" padding="5px">
                {data.message}
              </Typography>
              <Stack
                direction="row"
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                {/* <Typography variant="caption">{data.date.substring(0, 10)}</Typography> */}
                <CardActions>
                  <Stack
                    direction="row"
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                  >
                    <IconButton size="small" color="primary">
                      <ThumbUpIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      variant="caption"
                      marginRight="10px"
                      paddingBottom="5px"
                    >
                      2
                    </Typography>
                    <IconButton size="small" color="secondary">
                      <ThumbDownIcon fontSize="small" />
                    </IconButton>
                    <Typography
                      variant="caption"
                      marginRight="10px"
                      paddingBottom="5px"
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}
    </>
  );
};
export default Feedback;
