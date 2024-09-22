import TableList from "./TableList";

const TableBox = () => {
  return (
    <div className={`p-10 pt-2  bg-[#17262b] rounded-[10px]`}>
      <TableList text={"You sell a t-shirt"} money={"$ 30"} />
      <TableList text={"You pay for its production"} money={"$ 12"} />
      <hr className="mt-8 text-white" />
      <TableList
        text={"Your profit"}
        money={"$ 18"}
        font={"poppins"}
        color={"text-[#18c75a]"}
        size={"text-[20px]"}
      />
    </div>
  );
};

export default TableBox;
