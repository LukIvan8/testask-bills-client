import React, {useState} from 'react';
import {Form, FormikValues} from "formik";
import {Select} from "../../common/select";
import {IonSelectOption} from "@ionic/react";
import {Input} from "../../common/input";
import {ListLayout} from "../../common/list-layout";
import {Stack} from "../../common/stack";
import {Button} from "../../common/button";

interface PropTypes {
  transactionTypes: { value: string, label: string }[]
  providers: ProviderType
  values?:FormikValues
  handleChange?:any
  setFieldValue:Function
}

interface ProviderType {
  [key: string]: { value: string; label: string }[];
}

const Component = (props: PropTypes) => {
  const [selectedTransactionType, setSelectedTransactionType] = useState("");
  return (
    <Form>
      <ListLayout>
        <Select handleChange={props.handleChange} label="bill.formLabel.type" value={props.values ? props.values.transactionType : undefined}>
          {props.transactionTypes.map(option => {
            return <IonSelectOption key={option.value} value={option.value}>{option.label}</IonSelectOption>;
          })}
        </Select>
        {selectedTransactionType !== "" ? (
          <Select label="bill.formLabel.provider" handleChange={(e:any)=> props.handleChange(e)} value={props.values ? props.values.provider : undefined}>
            {props.providers.selectedTransactionType.map(option => {
              return <IonSelectOption key={option.value} value={option.value}>{option.label}</IonSelectOption>;
            })}
          </Select>
        ) : (<Select label="bill.formLabel.provider" handleChange={props.handleChange} value={props.values ? props.values.provider : undefined}></Select>)}
        <Input name="privateAccount" label="bill.formLabel.account" placeholder="bill.formPlaceholder.account" setFieldValue={props.setFieldValue} value={props.values ? props.values.privateAccount : undefined}/>
        <Input label="bill.formLabel.payment" placeholder="bill.formPlaceholder.payment" setFieldValue={props.setFieldValue} value={props.values ? props.values.paymentAmount : undefined}/>
      </ListLayout>
      <Stack width="90" justifyContent="space-between" gap={1}>
        <Button fill="outline" label="bill.formButton.cancel"/>
        <Button type="submit" label="bill.formButton.create"/>
      </Stack>
    </Form>
  );
};


export default Component;