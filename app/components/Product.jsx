import { Divider } from "@nextui-org/react";
import { formatCurrency } from "~/utils/numberUtils";

export default function Product({ product }) {
  return (
    <div className="my-2 product">
      <div className="flex flex-col md:flex-row gap-4 justify-between p-3 my-5">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={product.img}
            alt={product.name}
            // style={{ width: "8rem" }}
            className="flex-grow-1"
          />
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2">
          <h3 className="text-4xl font-semibold">{product.name}</h3>
          <p className="text-2xl font-semibold">{product.brand}</p>
          <p className="text-2xl font-semibold">
            Cijena: {formatCurrency(product.price)}
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
}
