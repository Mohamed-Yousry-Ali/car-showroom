/**
 *
 * @param product
 * @returns
 */
export const productValidations = (product: {
  title: string;
  descriptipn: string;
  imageUrl: string;
  price: string;
}) => {
  const errors: {
    title: string;
    descriptipn: string;
    imageUrl: string;
    price: string;
  } = {
    title: "",
    descriptipn: "",
    imageUrl: "",
    price: "",
  };

  const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product Title Must be Between 10 and 80 Charcters";
  }
  //////////////////////////////////////****//////////////////////////////////////////////////
  if (
    !product.descriptipn.trim() ||
    product.descriptipn.length < 10 ||
    product.descriptipn.length > 900
  ) {
    errors.descriptipn =
      "Product Description Must be Between 10 and 900 Charcters";
  }
  //////////////////////////////////////****//////////////////////////////////////////////////
  if (!product.imageUrl.trim() || !validURL) {
    errors.imageUrl = "Valid Image URL is Required";
  }
  //////////////////////////////////////****//////////////////////////////////////////////////
  if (!product.price.trim() || isNaN(Number(product.price))) {
    errors.price = "Valid Price is Required";
  }
  return errors;
};
