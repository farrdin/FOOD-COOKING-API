const Selected = () => {
  return (
    <div className="min-h-screen border rounded-3xl">
      <div className="wantToCook">
        <h1 className="text-[#282828] text-2xl text-center font-semibold p-6">
          Want to cook: 01
        </h1>
        <hr className="" />
        <div className="font-[Fira Sans] font-medium text-base text-[#878787]">
          <table className="w=full mx-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
                <td>
                  <button className="btn btn-ghost">hello</button>
                </td>
              </tr>
              <tr className="w-full flex justify-around ">
                <td>Name</td>
                <td>Time</td>
                <td>Calories</td>
                <td>
                  <button className="btn btn-ghost">hello</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="currentlyCooking p-6">
        <h1 className="text-[#282828] text-2xl text-center font-semibold">
          Currently cooking: 02
        </h1>
        <hr />
        <div className="flex justify-around font-[Fira Sans] font-medium text-base text-[#878787]">
          <td>
            <tr>Name</tr>
          </td>
          <td>
            <tr>Time</tr>
          </td>
          <td>
            <tr>Calories</tr>
          </td>
        </div>
      </div>
      <div className="flex justify-end gap-5  text-[#282828CC] text-base font-medium leading-7">
        <td>
          <tr>Total Time</tr>
        </td>
        <td>
          <tr>Total Calories</tr>
        </td>
      </div>
    </div>
  );
};

export default Selected;
