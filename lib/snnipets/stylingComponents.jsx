// Used as <StyledSelect> </StyledSelect>
const StyledSelect = (props) => {
  return (
    <Select
      {...props}
      sx={{
        color: "white",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "white",
        },
        "& .MuiSvgIcon-root": {
          color: "white",
        },
      }}
    ></Select>
  );
};

export default StyledSelect;
