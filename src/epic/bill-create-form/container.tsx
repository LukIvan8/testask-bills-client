import React from 'react';
import {Formik} from "formik";
import Component from "./component";

interface PropTypes {
  submit: Function
}

const paymentTypes = [
  {value: "internet", label: "Оплата інтернет послуг"},
  {value: "commun", label: "Оплата коммунальних послуг"},
  {value: "education", label: "Оплата освіти"}
];

const paymentProviders = {
  "internet": [
    {value: "fregat-tv", label: "Фрегат ТВ, ООО"},
    {value: "kievstar", label: "АО Киевстар"},
    {value: "ukrtelekom", label: "ПАО Укртелеком"}
  ],
  "commun": [
    {value: "comprov1", label: "Провайдер услуг 1"},
    {value: "comprov2", label: "Провайдер услуг 2"},
    {value: "comprov3", label: "Провайдер услуг 3"}
  ],
  "education": [
    {value: "eduprov1", label: "Провайдер обучения 1"},
    {value: "eduprov2", label: "Провайдер обучения 2"},
    {value: "eduprov3", label: "Провайдер обучения 3"}
  ]
};

const Container = (props: PropTypes) => {
  return (
    <Formik onSubmit={(values:any, {setSubmitting}:any) => {
      // @ts-ignore
      values.privateAccount = Number(values.privateAccount)
      // @ts-ignore
      values.paymentAmount = Number(values.paymentAmount)
      props.submit(values)
      console.log(values)
      setSubmitting(false)
    }}
            initialValues={{transactionType: "", provider: "", privateAccount: "", paymentAmount: ""}}>
      {({values, handleChange, setFieldValue}:any)=>(<Component setFieldValue={setFieldValue} handleChange={handleChange} values={values} transactionTypes={paymentTypes} providers={paymentProviders}/>)}
    </Formik>
  );
};

export default Container;