// @mui
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Card, { CardProps } from "@mui/material/Card";
import TableContainer from "@mui/material/TableContainer";
import { Theme, SxProps } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import { Switch } from "components";
// utils
// import Scrollbar from "src/components/scrollbar";
// import { TableHeadCustom } from "src/components/table";

// ----------------------------------------------------------------------

export default function EmailsTable({
  title,
  subheader,
  tableData,
  tableLabels,
  ...other
}) {
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      <TableContainer sx={{ overflow: "unset" }}>
        {/* <Scrollbar> */}
        <Table sx={{ minWidth: 680 }}>
          <TableHeadCustom headLabel={tableLabels} />

          <TableBody>
            {tableData.map((row) => (
              <AppNewInvoiceRow key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
        {/* </Scrollbar> */}
      </TableContainer>
    </Card>
  );
}

// ----------------------------------------------------------------------

function AppNewInvoiceRow({ row }) {
  return (
    <>
      <TableRow>
        <TableCell>
          <Switch />
        </TableCell>

        <TableCell>{row.invoiceNumber}</TableCell>

        <TableCell>{row.category}</TableCell>

        <TableCell>{row.price}</TableCell>
      </TableRow>
    </>
  );
}

// @mui

// ----------------------------------------------------------------------

const visuallyHidden = {
  border: 0,
  margin: -1,
  padding: 0,
  width: "1px",
  height: "1px",
  overflow: "hidden",
  position: "absolute",
  whiteSpace: "nowrap",
  clip: "rect(0 0 0 0)",
};

// ----------------------------------------------------------------------

function TableHeadCustom({
  order,
  orderBy,
  rowCount = 0,
  headLabel,
  numSelected = 0,
  onSort,
  onSelectAllRows,
  sx,
}) {
  return (
    <TableHead sx={sx}>
      <TableRow>
        {onSelectAllRows && (
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={!!numSelected && numSelected < rowCount}
              checked={!!rowCount && numSelected === rowCount}
              onChange={(event) => onSelectAllRows(event.target.checked)}
            />
          </TableCell>
        )}

        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align || "left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ width: headCell.width, minWidth: headCell.minWidth }}
          >
            {onSort ? (
              <TableSortLabel
                hideSortIcon
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={() => onSort(headCell.id)}
              >
                {headCell.label}

                {orderBy === headCell.id ? (
                  <Box sx={{ ...visuallyHidden }}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              headCell.label
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
