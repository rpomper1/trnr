import { Divider } from "@nextui-org/react";

export default function Product({ product }) {
  return (
    <>
      <div className="flex flex-row gap-4 justify-between p-3">
        <div className="flex flex-col gap-2 w-1/2">
          <h3 className="text-5xl font-semibold">{product.name}</h3>
        </div>
        <div className="w-1/2 flex">
          <img
            src={product.img}
            alt={product.name}
            style={{ width: "10rem" }}
            className="flex-grow-1"
          />
        </div>
      </div>
      <Divider />
    </>
  );
}
