import React from "react";
import { Formik, Form,Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormField, Button, Label } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
      <Formik 
      initialValues={initialValues} 
      validationSchema={schema}
      onSubmit = {(values)=>{
          console.log(values)
      }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="productName" placeholder="Ürün adı"/>
          <KodlamaIoTextInput name="unitPrice" placeholder="Ürün fiyatı"/>
          <Button color="green" type="submit">Ekle</Button>
        </Form>
      </Formik>
  );
}