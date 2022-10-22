const Array_Objects = () => {
  const data = [
    {
      menuName: "Hot dogs",
      menu: [
        { dishId: "1", dish_has_categories: [{ CategoryId: "8" }] },
        { dishId: "2", dish_has_categories: [{ CategoryId: "9" }] }
      ]
    },
    {
      menuName: "Burgers",
      menu: [
        { dishId: "3", dish_has_categories: [{ CategoryId: "6" }] },
        { dishId: "4", dish_has_categories: [{ CategoryId: "4" }] }
      ]
    },
    { name: "Drinks", menu: [] }
  ];

  const butt = () => {
    const res = data.filter((x) => x.menu.some((y) => y.dishId === "2"));
    // const res = data.filter((x) =>
    //   x.menu.some((y) =>
    //     y.dish_has_categories.some((z) => z.CategoryId === "8")
    //   )
    // );

    console.log(res);
  };

  // let obj = {
  //   company: "string",
  //   contactName: "string",
  //   phoneNumbers: [
  //     {
  //       areaCode: "string",
  //       category: "HOME",
  //       countryCode: "string",
  //       extension: "string",
  //       id: "string",
  //       number: "string"
  //     }
  //   ],
  //   primaryEmailAddress: "string"
  // };
  // // console.log(obj);
  // const funct = () => {
  //   // const newObj = obj;
  //   obj.phoneNumbers[0].id = 77;
  //   console.log(obj);
  //   // console.log(newObj);
  // };

  return (
    <>
      <h3 onClick={butt}>Hello</h3>
    </>
  );
};

export default Array_Objects;
